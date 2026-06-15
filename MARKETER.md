# 마케터 가이드 — 랜딩 변형 만들기

8mirrors 랜딩 A/B 테스트를 **코드 거의 없이** 운영하는 안내서. 순서대로 따라하면 됨.

---

## 0. 한 번만 — 계정·프로그램 준비

### 가입할 계정 2개
1. **GitHub 계정** (필수, 무료) — https://github.com 에서 가입. → 가입한 **아이디를 고고에게 알려주면** 이 저장소 접근권을 줌.
2. **Codex(OpenAI) 계정** — AI 비서. (이미 쓰고 있으면 그대로)

> Git(컴퓨터에 까는 도구)과 GitHub(웹 계정)는 다른 거지만, 설치·로그인은 아래 VSCode가 거의 다 해줌. 걱정 안 해도 됨.

### 프로그램 설치
1. **VSCode** — https://code.visualstudio.com
2. **Node.js** (LTS) — https://nodejs.org (랜딩을 내 컴퓨터에서 미리 보려면 필요)
3. VSCode 안에서 **Codex 확장** 설치 + 로그인

### 저장소 받기 (한 번)
VSCode → `Cmd+Shift+P` → **Git: Clone** → 아래 주소 붙여넣기 → GitHub 로그인 창 뜨면 로그인:
```
https://github.com/shimgo90-oss/8mirrors-design-sandbox.git
```
열린 다음, VSCode 터미널(`Ctrl+\``)에서 한 번:
```bash
npm install
```

---

## 1. 매번 작업 시작할 때

```bash
git checkout main && git pull        # 최신 상태로
git checkout -b variant/<이름>        # 내 작업 브랜치 (예: variant/glowup)
npm run dev                          # 미리보기: http://localhost:3000/lp/<slug>
```

---

## 2. 변형 만들기 (핵심 — 코드 안 건드림)

파일 하나만 연다: **`app/landing/_variants.tsx`**

블록 하나를 복사해서 4가지만 바꾸면 새 변형 + URL이 생김:

```ts
{
  slug: "glowup",                    // → 주소가 /lp/glowup 이 됨 (소문자-하이픈)
  label: "변화 중심 (카피 테스트)",     // 내부 메모용 이름
  note: "8주 변화/결과를 앞세우면 전환이 오를 것이다",  // 무슨 가설인지
  sections: ["hero", "what-you-get", "offer", "footer"],  // 어떤 블록을, 어떤 순서로
  copy: {                            // 문구만 바꾸기 (코드 X)
    "hero.titleA": "8주 뒤, 거울 보는 게",
    "hero.titleB": "즐거워져",        // 라임 형광펜 들어가는 부분
    "hero.sub": "2분이면 돼요. 내 피부에 맞춘 루틴으로 시작하세요.",
    "bar.cta": "내 루틴 시작하기",
  },
}
```

- 쓸 수 있는 블록: `hero · what-you-get · report-archive · team · stories · offer · footer`
- 바꿀 수 있는 문구 키: `app/landing/_i18n.tsx` 참고 (`hero.titleA`, `hero.titleB`, `hero.sub`, `hero.cta`, `bar.cta` 등)
- 막히면 Codex에게: *"`_variants.tsx`에서 lean 변형 복사해서 slug는 glowup, 헤드라인을 ~로 바꿔줘"* 라고 시키면 됨.

> ⚠️ **카피 규칙**: 노출 문구는 **영어(미국 타깃)**. 톤·가치 프레이밍은 `context/` 폴더(brand-voice / value-prop / variant-playbook) 참고. **'리포트'로 팔지 말 것** → 맞춤 루틴·결과로.

### 새로운 디자인/블록이 필요하면?
그건 **코드 작업(Claude/개발 레인)**. 직접 React 만들지 말고 → **GitHub 이슈**로 "이런 블록이 필요해" 남기면 고고/Claude가 만들어 줌.

---

## 3. 미리보기 → 올리기 → 검토받기

```bash
git add -A && git commit -m "variant: glowup 추가" && git push -u origin variant/glowup
```

- push하면 **Vercel이 프리뷰 URL을 자동 생성** → 폰에서 직접 확인(모바일 실측 권장).
- GitHub에서 **Pull Request** 올리기 → **고고가 디자인 관점에서 검토 후 머지**.
- 머지되면 자동으로 `8mirrors-design-sandbox.vercel.app/lp/<slug>` 에 라이브 → 광고에 연결.

> 🔒 `main`에 직접 머지/푸시는 안 됨(막혀 있음). 항상 브랜치 → PR → 고고 승인.

---

## 4. 막힐 때

- 무엇을·왜 테스트하나: `context/variant-playbook.md`
- 톤·문구: `context/brand-voice.md`
- 디자인 규칙: `DESIGN.md`
- 그래도 막히면 Codex에게 묻거나 고고에게.
