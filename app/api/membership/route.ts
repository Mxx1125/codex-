import { NextResponse } from 'next/server';

// 会员纳新接口占位。
// 原型阶段：返回明确的“未接入”状态，不发送、不保存任何个人信息。
// 正式上线：在服务端接入品牌会员系统，补充隐私同意、服务端校验、限流与失败重试。
export async function POST() {
  return NextResponse.json(
    { ok: false, message: '会员接口尚未接入，信息未提交。' },
    { status: 501 },
  );
}
