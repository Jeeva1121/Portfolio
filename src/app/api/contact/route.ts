import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        
        // Retrieve the API key from environment variables on the server
        // This avoids adblockers entirely, and avoids NEXT_PUBLIC build-time caching issues
        const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || process.env.WEB3FORMS_KEY || "5b2b4be6-9eab-4068-804d-cdc9771b6c84";
        
        formData.append("access_key", apiKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        return NextResponse.json(data, { status: response.status });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
