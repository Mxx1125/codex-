// CMS 数据接入层。
// 未配置 CMS_URL 时返回本地确认内容；配置后尝试读取远程内容，失败时安全回退，
// 避免页面出现空白或无限加载。

export type CmsCollection = {
  revalidate?: number;
};

export async function getCmsContent<T>(
  key: string,
  fallback: T,
  revalidate = 60,
): Promise<T> {
  const base = process.env.CMS_URL;
  if (!base) return fallback;

  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/${key}`, {
      next: { revalidate },
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error(`CMS ${key} 响应异常：${res.status}`);
    return (await res.json()) as T;
  } catch (error) {
    // 正式上线时接入日志服务；原型阶段静默回退到本地内容
    console.error(`[cms] 读取 ${key} 失败，已回退本地内容`, error);
    return fallback;
  }
}
