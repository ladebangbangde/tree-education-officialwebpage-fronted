import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type OfficialLeadPayload = {
  name?: string;
  age?: string;
  education?: string;
  city?: string;
  phone?: string;
  wechat?: string;
  destination?: string;
  intentionRegionCode?: string;
  intentionRegionName?: string;
  budget?: string;
  remark?: string;
  source?: string;
  leadRole?: "student" | "worker";
};

const requiredFields: Array<keyof OfficialLeadPayload> = ["name", "phone", "intentionRegionCode", "budget"];

function cleanBaseUrl(value?: string) {
  return value?.trim().replace(/\/+$/, "");
}

function getBackendBaseUrl() {
  return cleanBaseUrl(process.env.IOAS_API_BASE_URL)
    || cleanBaseUrl(process.env.NEXT_PUBLIC_IOAS_API_BASE_URL)
    || "http://tree-education-ioas:8080";
}

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function role(value: unknown): "student" | "worker" {
  return value === "worker" ? "worker" : "student";
}

function maskPhone(phone: string) {
  if (phone.length < 7) return "***";
  return `${phone.slice(0, 3)}****${phone.slice(-4)}`;
}

export async function POST(request: NextRequest) {
  let body: OfficialLeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "请求体格式错误" }, { status: 400 });
  }

  const payload: OfficialLeadPayload = {
    name: text(body.name),
    age: text(body.age),
    education: text(body.education),
    city: text(body.city),
    phone: text(body.phone),
    wechat: text(body.wechat),
    destination: text(body.destination) || text(body.intentionRegionName),
    intentionRegionCode: text(body.intentionRegionCode),
    intentionRegionName: text(body.intentionRegionName),
    budget: text(body.budget),
    remark: text(body.remark),
    source: text(body.source) || "official_website_home_consultation",
    leadRole: role(body.leadRole)
  };

  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length) {
    return NextResponse.json({ success: false, message: `请完整填写必填信息：${missing.join(", ")}` }, { status: 400 });
  }

  const backendBaseUrl = getBackendBaseUrl();
  const targetUrl = `${backendBaseUrl}/api/official/leads`;

  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Forwarded-For": request.headers.get("x-forwarded-for") || "",
        "User-Agent": request.headers.get("user-agent") || "",
        "Referer": request.headers.get("referer") || ""
      },
      body: JSON.stringify(payload),
      cache: "no-store"
    });

    const contentType = response.headers.get("content-type") || "";
    const responseBody = contentType.includes("application/json") ? await response.json() : { message: await response.text() };

    if (!response.ok) {
      console.error("[official-leads-proxy] backend rejected lead", {
        status: response.status,
        targetUrl,
        phone: maskPhone(payload.phone || ""),
        leadRole: payload.leadRole,
        responseBody
      });
      return NextResponse.json({ success: false, message: responseBody?.message || "线索提交失败，请稍后重试" }, { status: response.status });
    }

    return NextResponse.json(responseBody, { status: response.status });
  } catch (error) {
    console.error("[official-leads-proxy] backend unavailable", {
      targetUrl,
      phone: maskPhone(payload.phone || ""),
      leadRole: payload.leadRole,
      error: error instanceof Error ? error.message : String(error)
    });
    return NextResponse.json({ success: false, message: "官网线索服务暂时不可用，请联系顾问或稍后重试" }, { status: 502 });
  }
}
