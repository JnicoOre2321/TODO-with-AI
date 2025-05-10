import sequelize from '@/app/server/config/db';
import userServices from '@/app/server/services/userServices';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();
        const user = await userServices.login(email, password);
        const response = NextResponse.json({ user }, { status: 200 });
        response.cookies.set('user_token', user.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30, // 30 days
        });
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 400 });
    }
}
