![Prinz](https://socialify.git.ci/Lmmmmmm-bb/Prinz/image?description=1&name=1&theme=Light)

<p align="center">
<a href="https://github.com/Lmmmmmm-bb/Octo-Exam/actions/workflows/codeql-analysis.yml"><img alt="Octo-Exam-Codeql-Action" src="https://github.com/Lmmmmmm-bb/Prinz/actions/workflows/codeql-analysis.yml/badge.svg"></a>
</p>

<p align="center">
<a href="https://github.com/Lmmmmmm-bb/Prinz/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Lmmmmmm-bb/Prinz"></a>
<a href="https://github.com/Lmmmmmm-bb/Prinz/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Lmmmmmm-bb/Prinz"></a>
<a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a>
<a href="https://github.com/Lmmmmmm-bb/Prinz/pulls"><img alt="GitHub PR" src="https://img.shields.io/badge/PR-Welcome-%2345A2FF"></a>
<a href="mailto:lmmmmmm12138@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-Google-%23d95040"></a>
</p>

## 配置数据库 & OAuth & JWT

1. 根目录下创建 `.env.local` 配置文件
2. 参照以下配置文件内容，替换 `.env.local` 配置文件内容
3. 根据本地数据库信息配置数据库

```txt
MYSQL_HOST=
MYSQL_PORT=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

JWT_SECRET=
```

## 启动项目

```shell
# 开发调试
> pnpm install # 安装依赖
> pnpm start # 启动开发服务器
```
