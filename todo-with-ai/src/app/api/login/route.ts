import sequelize from '@/app/server/config/db';
import userServices from '@/app/server/services/userServices';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const user = await userServices.login(email, password);
        console.log(user);
        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 400 });
    }
}
