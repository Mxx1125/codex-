# EXCEPTION 例外 · 品牌官方网站

「例外（EXCEPTION de MIXMIND）」品牌官网前端项目。以东方美学与极简留白为视觉基调，采用
Next.js App Router + React + TypeScript + CSS Modules 构建，单页滚动结构，适配电脑、iPad/平板与手机。

## 技术栈

- 框架：Next.js（App Router）、React、TypeScript
- 样式：CSS Modules + CSS 自定义变量（不使用 Tailwind）
- 表单：React Hook Form + Zod
- 动效：CSS Transition / Keyframes + IntersectionObserver（高级动效可另行接入 GSAP + ScrollTrigger）
- 测试：Playwright（电脑 / iPad / 手机）
- 代码质量：ESLint + Prettier

## 本地运行

```bash
npm install        # 或 pnpm install
npm run dev        # 开发服务器 http://localhost:3000
```

生产构建与启动：

```bash
npm run build
npm run start
```

代码检查与端到端测试：

```bash
npm run lint
npx playwright install   # 首次运行前安装浏览器
npm run test:e2e
```

## 页面结构

单页滚动：首屏 Hero → 新品展示 → 品牌纪事 → 传袭再造 → 会员礼遇 → 空间与联结 → 页脚。

- `components/navigation` 顶部固定导航（含滚动进度条、当前板块高亮、移动端菜单）
- `components/hero` 首屏全屏影像与文字层
- `components/sections` 五大内容板块
- `components/media` 可访问视频组件与进入视口揭示
- `components/forms` 会员纳新表单
- `data/content.ts` 全部品牌文案与演示数据（单一数据源）
- `lib/cms.ts` CMS 数据接入层
- `lib/validation.ts` 表单校验规则
- `app/api/membership/route.ts` 会员接口占位

## 品牌设计变量

集中在 `app/globals.css` 的 `:root`：

| 名称 | 色值 | 用途 |
| --- | --- | --- |
| 墨黑 | `#1A1A1A` | 主文字、首屏品牌名 |
| 宣纸白 | `#F5F1EA` | 页面背景 |
| 茶褐 | `#8B7355` | 辅助色、分割线、次要文字 |
| 黛青 | `#2C3E50` | 深色板块背景 |
| 灰墨 | `#4A4A4A` | 正文 |
| 浅灰 | `#E8E4DD` | 卡片与分割区块 |

字体以衬线（中文宋体系 / 拉丁衬线）承载品牌气质，无衬线用于正文与标注。生产环境建议通过
`next/font` 或品牌授权字体替换为正式字库。

## 响应式断点

| 端 | 视口 | 栅格 | 安全边距 | 布局要点 |
| --- | --- | --- | --- | --- |
| 手机 | `<768px` | 4 栅格 | 20-24px | 单列为主，正文不小于 16px |
| iPad/平板 | `768-1199px` | 8 栅格 | 28-40px | 按可用宽度在单列与双列间切换 |
| 电脑 | `≥1200px` | 12 栅格 | 48-64px | 内容最大宽度 1440px |

悬停与触屏交互以 `hover`、`pointer` 能力查询判断，不依赖设备型号。布局按视口宽度决定。

## 媒体与素材

已按品牌图片资料包生成 Web 用降采样图片，存放于 `public/images/`：

- `hero.jpg`（首屏封面）、`collection-video.jpg`（新品影像封面）
- `look-*`（六个 Look 大片）、`milestone-*`（品牌纪事影像）
- `heritage-video.jpg`、`heritage-stage-*`（传袭再造）
- `logo-*.png`（品牌 Logo，透明底，棕色 / 米色）

建议尺寸与替换方式：

| 用途 | 建议宽度 | 替换位置 |
| --- | --- | --- |
| 首屏封面 | 2560px | `data/content.ts` → `hero.poster` |
| 板块视频封面 | 2400px | `data/content.ts` → 各 `video.poster` |
| Look 大片 | 1200px（竖构图 3:4） | `data/content.ts` → `collection.series` |
| 纪事 / 阶段图 | 1200px | `data/content.ts` → `milestones` / `heritage` |

视频不打包进代码仓库，正式视频存放于品牌对象存储/CDN，替换 `data/content.ts` 中各 `video.src`。

## 待接入接口

- **CMS**：在 `.env.local` 配置 `CMS_URL`，`lib/cms.ts` 的 `getCmsContent` 会读取远程内容，
  失败时回退本地内容。
- **会员系统**：`app/api/membership/route.ts` 为服务端占位，当前返回 501 且不发送数据；原型表单
  只做前端校验，不保存任何个人信息。正式接入时补充隐私同意、服务端校验、限流与重试。
- **门店数据**：`data/content.ts` → `boutiques.stores`，地址与营业时间当前为占位，需品牌方提供。
- **社交链接**：`boutiques.socials` 的 `href` 需替换为品牌确认地址，图标建议替换为品牌官方 SVG。

密钥只放在服务端环境变量，禁止使用 `NEXT_PUBLIC_` 前缀暴露。

## 上线前检查项

- [ ] 替换品牌正式字体、图片、视频与 Logo
- [ ] 补齐门店地址、营业时间、联系方式与社交链接
- [ ] 确认里程碑年份、奖项、材质与工艺描述（`data/content.ts`）
- [ ] 接入 CMS、会员系统与媒体存储
- [ ] 会员章程、隐私政策链接经品牌与法务确认
- [ ] 生产构建通过 `npm run build`，Playwright 三端测试通过
- [ ] 完成 Core Web Vitals 与真实设备回归

## 目录结构

```text
app/            layout、page、globals.css、api
components/     导航、首屏、内容板块、媒体、表单
data/content.ts 品牌文案与演示数据
lib/            CMS 接入层、表单校验
public/images/  本地媒体素材
tests/          Playwright 多端测试
```
