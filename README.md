# Super Strong — 工厂外贸独立站（Demo）

Astro 静态站点，英文 + 西班牙文 B2B 展示 + 询盘。英文位于根目录，西班牙文位于 `/es/`。视觉与动效参考本地 `01/index.local.html` 的动效语法，已重写为生产代码。

> 当前是 **Demo 内容**：产品参数、工厂数据、联系方式均为示例；图片与视频为 AI 生成，**上线前必须替换**。
> `demoMode: true` 时全站输出 `noindex`，`robots.txt` 为 `Disallow: /`，避免演示站被搜索收录。

## 运行

```bash
cd site
npm install
npm run dev       # 本地开发 http://localhost:4321
npm run build     # 输出到 dist/
npm run preview   # 预览构建结果
npm run check     # TypeScript / Astro 类型检查
```

部署：把 `dist/` 上传到任意静态托管（Netlify / Vercel / Cloudflare Pages / 对象存储 + CDN）。SSL 在托管平台开启。若托管平台支持自定义错误页，把 `/es/*` 的 404 指向 `dist/es/404/index.html`。

## 已实现

**页面（两种语言：`/` 与 `/es/`）**
- 首页：预加载计数器、Logo 飞入、视频门户、模型切换、滚动揭示、自定义光标、指针倾斜
- 产品列表 `/products/`：分类、型号卡片、OEM 分类占位
- 产品详情 `/products/[slug]/`：规格表、卖点、应用、FAQ、视频、关联型号、询盘
- OEM / ODM `/oem-odm/`：定制范围、合作流程、报价所需信息、FAQ
- 隐私政策 `/privacy/`、404 页面
- 西班牙文对应路径：`/es/`、`/es/products/`、`/es/products/[slug]/`、`/es/oem-odm/`、`/es/privacy/`

**转化与合规**
- 询盘表单：前端校验、蜜罐、提交状态、Demo 提示；配置 endpoint 后自动 POST（FormData）
- GDPR-lite：仅在配置 GA4 后显示 Cookie 同意条；接受前不加载任何统计脚本；可拒绝
- WhatsApp：配置号码后自动显示浮动按钮与询盘区入口，未配置时回退为邮箱
- 隐私政策模板（需法务复核后上线）

**SEO / 性能 / 无障碍**
- 每页独立 TDK、canonical、OG/Twitter
- 多语言：互指 `hreflang`（en / es / x-default）、按语言本地化的 `<html lang>`、canonical、`og:locale`
- 页头语言切换（EN / ES）保留当前页面路径；移动端在菜单内切换
- JSON-LD：Organization、WebSite、ItemList、Product、BreadcrumbList、FAQPage，均按当前语言输出
- `sitemap.xml` 由产品数据自动生成，包含双语条目与 `xhtml:link` 语言替代链接；`robots.txt` 随 `demoMode` 切换
- 自托管字体（Archivo / Inter variable）、响应式、`prefers-reduced-motion`、键盘焦点、跳转链接
- 移动端独立布局（非简单缩放），已验证 390 / 768 / 900 / 1024 / 1440

## 上线前清单

1. **域名**
   - 修改 `astro.config.mjs` 的 `site`
   - 修改 `src/data/site.ts` 的 `url`（两处需一致）
2. **联系方式**：`src/data/site.ts` 中 email、phone、WhatsApp（纯数字，含国家码，如 `8613800000000`）、地址。
3. **内容与数据**：`src/data/products.ts`（型号、参数、卖点、应用）、`src/data/site.ts`（工厂数据、认证）。
4. **素材**：替换 `public/media/` 下的图片/视频/海报，保持文件名可直接覆盖；或改产品数据里的路径。确认无水印、无 AI 痕迹、有拍摄授权。
5. **合规**：
   - 核对所有参数、产能、认证表述，保留证书文件备查
   - 找法务复核 `/privacy/`，补公司主体信息
6. **从 Demo 切生产**：`demoMode: false`（恢复 index 与 `Allow: /`）。
7. **表单**：`formEndpoint` 填入支持 `multipart/form-data`、返回 2xx、允许跨域的地址（Formspree / Getform / 自建接口）。上线后实际发一封测试询盘。
8. **GA4（可选）**：`ga4Id` 填 `G-XXXXXXX`，同意后才加载。
9. **搜索**：Google Search Console 提交 `https://你的域名/sitemap.xml`，检查索引状态。
10. **验收**：`npm run build`、`npm run preview`，手机实测首页 / 产品 / 表单 / Cookie / WhatsApp；英文与 `/es/` 分别检查语言切换、`hreflang` 互指与表单提示语言。

## 内容维护

- **新增型号**：在 `src/data/products.ts` 的 `products` 数组追加对象，并填写 `es` 西班牙文覆盖层（名称、SEO、摘要、参数、FAQ 等）。详情页、双语列表、首页、sitemap、结构化数据会自动生成。每个产品需填写 `seoTitle`、`seoDescription` 和 `faqs`（产品 FAQ，同时生成 FAQPage 结构化数据）。
- **首页参数条**：自动按 `specs` 的 `key` 读取，命名需保持：
  `blade`、`power`、`voltage`、`teeth`、`speed`、`depth-90`、`weight`；详情页认证徽章读取 `certification`。
- **新增分类**：`categories` 中追加（含 `nameEs`、`descriptionEs`）；`comingSoon: true` 显示为 OEM 占位面板。
- **界面文案**：`src/i18n/ui.ts`（导航、表单、页脚、Cookie、404 等共享文案）、`home.ts`、`catalog.ts`、`oem.ts`、`privacy.ts`（各页面正文）。
- **新增语言**：在 `src/i18n/index.ts` 的 `locales` 中追加语言，补齐各字典的同语言条目，并在 `pages/<lang>/` 下建立对应页面（可复用 `src/views/` 的视图组件）。
- **图片尺寸**：当前产品图为 1254×1254、海报 720×720、OG 1200×630。替换时保持比例。

## 目录

```
site/
├─ public/
│  ├─ favicon.svg
│  └─ media/                 # webp / mp4 / poster
├─ src/
│  ├─ components/            # Header, Footer, Logo, InquirySection, CookieConsent, WhatsAppFloat, Breadcrumbs
│  ├─ data/                  # site.ts, products.ts（唯一内容源，含 es 覆盖层）
│  ├─ i18n/                  # index.ts（语言/路径/hreflang 工具）+ ui/home/catalog/oem/privacy 字典
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/                 # 英文根路由 + es/ 西班牙文路由 + sitemap.xml、robots.txt
│  ├─ views/                 # HomeView, ProductsView, ProductDetailView, OemView, PrivacyView, NotFoundView
│  ├─ scripts/               # home.ts（首页动效）, ui.ts（全站交互）
│  └─ styles/global.css
└─ astro.config.mjs
```

## 未包含（需要账号 / 素材 / 资质）

- 真实域名、服务器、SSL 证书、邮件服务
- 现场产品拍摄、短视频、白底图 / 场景图
- 在线支付（PayPal / 信用卡）的 KYC 与支付资质
- CMS 后台（当前为代码维护；如需后台可接 Decap / Sanity / Strapi）
- Google Business Profile、持续 SEO 内容运营（英文 / 西班牙文已实现）
- 真实 GA4 / Meta Pixel 账号与数据

## 说明

- 首页预加载每次会话只播放一次（`sessionStorage.ss-intro`），内页不加载首页动效脚本。
- 自定义光标与倾斜只在精确指针设备（桌面）启用，触屏和 reduced-motion 下自动关闭。
- 本仓库不包含服务端密钥；表单 endpoint 为公开地址，勿放私钥。
