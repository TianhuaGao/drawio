# Engineering Paper Diagram Styles

> [!IMPORTANT]
> 本仓库是基于 [jgraph/drawio](https://github.com/jgraph/drawio) 的个人非官方
> fork，目标是扩展适合控制专业与计算机专业论文的可编辑绘图风格、组件库和
> 模板。它与 draw.io 官方没有隶属、赞助或背书关系。

## 在线入口

**[打开本 fork 的在线编辑器](https://tianhuagao.github.io/drawio/)**

该入口由本仓库的 `dev` 分支通过 GitHub Pages 自动部署，可直接在浏览器中
绘图、保存 `.drawio` 文件，并导出常用图片或文档格式，无需在本机启动服务。
这是纯静态前端部署，依赖服务器或第三方凭据的云盘集成与服务端转换功能不在
当前保证范围内。

## Fork 目的

这个 fork 不以复制一套普通 draw.io 网站为终点，而是希望逐步建立面向学术
论文和技术报告的工程绘图体系：

- **控制专业**：控制系统框图、闭环反馈、求和点、状态估计、鲁棒/自适应控制、
  飞控与机器人系统架构等风格和模板；
- **计算机专业**：算法流程、机器学习与神经网络架构、数据管线、软件系统、
  分布式系统和实验流程等风格和模板；
- **论文表达**：强调统一的视觉语法、可编辑结构、克制的配色、清晰的连接关系，
  以及适合 SVG、PNG、PDF 输出的版式。

首个已实现风格包是 **White Ceramic Engineering**，目前包含 10 个可拖拽
控制工程组件、配色方案和一张可编辑闭环控制系统模板。实现和维护说明见
[`etc/white-ceramic/README.md`](etc/white-ceramic/README.md)。后续风格会在
实际论文绘图需求中逐步扩展；上述方向是项目目标，不表示所有类型均已完成。

### English summary

This is an unofficial personal fork of draw.io focused on editable,
publication-oriented style packs and templates for control engineering and
computer science diagrams. The first available pack is **White Ceramic
Engineering**. Use the hosted editor at
[tianhuagao.github.io/drawio](https://tianhuagao.github.io/drawio/).

---

# draw.io

## About

draw.io is a configurable diagramming and whiteboarding application, jointly owned and developed by draw.io Ltd (previously named JGraph) and draw.io AG. We also run a production deployment at https://app.diagrams.net.

## License

The source code in this repository is licensed under the [Apache License 2.0](LICENSE).

The icon sets, stencil libraries, and diagram templates are provided under the following terms:

> The icon sets and stencil libraries included in this software, and any derivatives thereof (including conversions to other formats, traced reproductions, substantially similar visual representations, or AI-generated images created using these icons as reference or training input), may not be used as software assets in, distributed for use with, or incorporated into Atlassian products or products distributed through the Atlassian marketplace or plugin ecosystem, without explicit written permission.
>
> This restriction does not apply to end-user diagram output (such as exported images or documents) created using this software.

Some icons are originally defined by third-party copyright holders; we have verified that all original licenses permit use in this project. Additional third-party JavaScript libraries are included, all with licenses compatible with Apache 2.0 (no GPL or AGPL).

We make no copyright claim on diagrams you create with this software.

## Contributions

We do not accept pull requests. The project is developed entirely by the core team.

## Scope

draw.io is a diagramming and whiteboarding application. It is not an SVG editor. SVG export is intended for embedding in web pages, not for editing in other tools.

Note that draw.io does not support real-time collaborative editing in this version, currently.

For issues or questions about the editor in any draw.io product, the issue tracker and discussions here are a good starting point.

## Running

Options for running draw.io:

- Fork this repository and [publish to GitHub Pages](https://help.github.com/categories/github-pages-basics/) for a [fully functional editor](https://jgraph.github.io/drawio/src/main/webapp/index.html) (without integrations)
- Use the [official Docker image](https://github.com/jgraph/docker-drawio)
- Download [draw.io Desktop](https://get.diagrams.net)

Packaged .war files are available on the [releases page](https://github.com/jgraph/draw.io/releases).

## Supported Browsers

Chrome 123+, Firefox 120+, Safari 17.5+, Opera 109+, Edge 123+, WebView Android 137+, Safari iOS 18.5+.

## Trademark

draw.io is a registered EU trademark (#018062448).

Do not use the draw.io name or logo in ways that suggest affiliation with, endorsement by, or sponsorship by draw.io. Do not use draw.io logos for your own business, product, project, domain, or social media presence. Do not modify the draw.io logos. Use of draw.io trademarks requires prior written permission.
