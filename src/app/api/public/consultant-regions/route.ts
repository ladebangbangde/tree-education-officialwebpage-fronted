import { NextResponse } from "next/server";

export const runtime = "nodejs";

function cleanBaseUrl(value?: string) {
  return value?.trim().replace(/\/+$/, "");
}

function getBackendBaseUrl() {
  return cleanBaseUrl(process.env.IOAS_API_BASE_URL)
    || cleanBaseUrl(process.env.NEXT_PUBLIC_IOAS_API_BASE_URL)
    || "http://tree-education-ioas:8080";
}

export async function GET() {
  const backendBaseUrl = getBackendBaseUrl();
  const targetUrl = `${backendBaseUrl}/api/v1/public/consultant-regions`;

  try {
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    const contentType = response.headers.get("content-type") || "";
    const responseBody = contentType.includes("application/json") ? await response.json() : { message: await response.text() };
    return NextResponse.json(responseBody, { status: response.status });
  } catch (error) {
    console.error("[consultant-regions-proxy] backend unavailable", {
      targetUrl,
      error: error instanceof Error ? error.message : String(error)
    });
    return NextResponse.json({ success: false, message: "意向区域服务暂时不可用" }, { status: 502 });
  }
}
