/**
 * AnswerBottomSections - ANSWERページ下部の共通セクション群
 * Home.tsxのABOUT 1ST CLASS FP以降と統一し、全ANSWERページで再利用する
 * 含むセクション:
 *   - ABOUT 1ST CLASS FP
 *   - FEE（なぜ無料か含む、共有FeeSectionコンポーネント）
 *   - 相談者の声
 *   - FAQ
 *   - 申し込みセクション
 *   - フッター（プライバシーポリシー含む）
 */

import { useState } from "react";
import { useLocation } from "wouter";
import FeeSection from "@/components/FeeSection";
import {
  ChevronRight,
  AlertTriangle,
  Star,
  User,
  ClipboardList,
  MessageCircle,
} from "lucide-react";

// ===== 相談者の声 =====
const voices = [
  {
    tag: "論理的で信頼できる",
    text: "説明が論理的で腹落ちしやすく、暗黙知になりがちな前提や根拠も明確に伝えてくれるので信頼して相談できます。市場やマクロ環境の変化も踏まえた提案を、スピード感ある対話で進められるのも一つの魅力です。",
    name: "Y.Hさん（30代）",
    role: "外資系戦略コンサル勤務 / マネージャー",
    avatar: "/images/client-yh-avatar_b31f5eb0_2fef5ba8.jpg",
  },
  {
    tag: "納得できる提案",
    text: "説明がとてもロジカルでわかりやすく、家計の整理をした上でこちらの状況に合わせた提案をしてくれるので、納得しながら判断できます。資産形成の基本だけでなく、最近の市況トレンドも踏まえてアドバイスをもらえるので、忙しい中でも安心して相談できています。",
    name: "A.Oさん（30代）",
    role: "市中病院勤務 / 内科医",
    avatar: "/images/client-ao-avatar_4dfd8bb8_c80185eb.jpg",
  },
  {
    tag: "初心者にも丁寧",
    text: "最初NISAやiDeCoも始めていない状態でお話を聞きましたが、初心者にもとても分かりやすく投資や資産形成について教えてくださりました。勤務先や状況が変わる時に相談できるのは心強いと思いました。",
    name: "Y.Sさん（30代）",
    role: "市中病院勤務 / 内科医",
    avatar: "/images/client-ys-avatar_84b99057_86a03fa8.jpg",
  },
  {
    tag: "早期からのサポート",
    text: "投資を含む資産形成全般に関して最新の情報を提供してくださいます。後期研修医の頃からお世話になっており、早い時期から金融に興味を持てて良かったです。",
    name: "O.Wさん（30代）",
    role: "開業医 / 元外科医",
    avatar: null,
  },
];

const faqs = [
  "FIREって、実際のところ勤務医でも現実的に可能なの？",
  "インデックス投資って、本当に「最適解」なの？",
  "年収2000万クラスの勤務医はどのくらい投資に回すべき？",
  "現金比率は何％が合理的？",
  "インデックス投資の最大の弱点って何？",
  "「安全資産」を入れる意味って何？",
  "医師の節税で一番効果的な方法は何？",
  "1級FPはどんなポートフォリオを組んでいる？",
];

const applyOptions = [
  {
    id: "fp-individual",
    Icon: User,
    title: "1級FPお試し相談(オンライン可)",
    desc: "FPの空き状況を確認する",
    sub: "30分～延長可 ・ 21時以降も対応可",
    color: "#1B2A5E",
    path: "/booking",
  },
  {
    id: "tax-individual",
    Icon: ClipboardList,
    title: "税理士オンラインセミナー参加",
    desc: "セミナー形式（60分）で税理士の話を聞きたい。",
    sub: "",
    color: "#059669",
    path: "/apply?type=tax-seminar",
  },
];

// ===== メインエクスポート =====
export default function AnswerBottomSections() {
  const [, navigate] = useLocation();
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleApply = (id: string, path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* ===== BLUE DIVIDER ===== */}
      <div style={{ height: "4px", background: "linear-gradient(90deg, #1B2A5E, #2563EB, #1B2A5E)" }} />

      {/* ===== ABOUT 1ST CLASS FP ===== */}
      <section style={{ background: "#fff", padding: "36px 16px" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <p style={{ color: "#2563EB", fontWeight: 900, fontSize: "0.82rem", letterSpacing: "0.12em", marginBottom: "8px" }}>
            ABOUT 1ST CLASS FP
          </p>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#1B2A5E", marginBottom: "6px" }}>
            そもそも<span style={{ color: "#149fff" }}>1級FP</span>って？
          </h2>
          <p style={{ fontSize: "0.8rem", color: "#555", lineHeight: 1.7, marginBottom: "24px" }}>
            1級ファイナンシャル・プランニング技能士は、厚生労働省認可の国家資格でお金のプロとして最高峰の称号です。
          </p>

          {/* FP 3段階 */}
          <div style={{
            background: "#F5F7FA", borderRadius: "10px", padding: "16px",
            marginBottom: "16px", border: "1px solid #E5E7EB"
          }}>
            <p style={{ fontSize: "0.92rem", fontWeight: 900, color: "#1B2A5E", marginBottom: "12px" }}>FP資格は3段階</p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ background: "#E5E7EB" }}>
                  <th style={{ padding: "8px 10px", textAlign: "left", color: "#555", fontWeight: 700, borderBottom: "1px solid #D1D5DB" }}>資格</th>
                  <th style={{ padding: "8px 10px", textAlign: "left", color: "#555", fontWeight: 700, borderBottom: "1px solid #D1D5DB" }}>内容</th>
                  <th style={{ padding: "8px 10px", textAlign: "center", color: "#555", fontWeight: 700, borderBottom: "1px solid #D1D5DB", whiteSpace: "nowrap" }}>合格率</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "#fff" }}>
                  <td style={{ padding: "8px 10px", color: "#555", borderBottom: "1px solid #E5E7EB", whiteSpace: "nowrap" }}>3級FP</td>
                  <td style={{ padding: "8px 10px", color: "#555", borderBottom: "1px solid #E5E7EB" }}>入門レベル。基礎的な知識を習得。</td>
                  <td style={{ padding: "8px 10px", textAlign: "center", color: "#555", borderBottom: "1px solid #E5E7EB", whiteSpace: "nowrap" }}>約50%</td>
                </tr>
                <tr style={{ background: "#fff" }}>
                  <td style={{ padding: "8px 10px", color: "#555", borderBottom: "1px solid #E5E7EB", whiteSpace: "nowrap" }}>2級FP</td>
                  <td style={{ padding: "8px 10px", color: "#555", borderBottom: "1px solid #E5E7EB" }}>実務レベル。より広範な相談に対応。</td>
                  <td style={{ padding: "8px 10px", textAlign: "center", color: "#555", borderBottom: "1px solid #E5E7EB", whiteSpace: "nowrap" }}>約30%</td>
                </tr>
                <tr style={{ background: "#1B2A5E" }}>
                  <td style={{ padding: "8px 10px", borderBottom: "none", whiteSpace: "nowrap" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "3px" }}>
                      <span style={{ color: "#F5C400", fontWeight: 900 }}>1級FP</span>
                      <span style={{ fontSize: "0.58rem", background: "#F5C400", color: "#1B2A5E", padding: "1px 5px", borderRadius: "3px", fontWeight: 900, whiteSpace: "nowrap" }}>★ 最高峰</span>
                    </div>
                  </td>
                  <td style={{ padding: "8px 10px", color: "#E2E8F0", borderBottom: "none", verticalAlign: "middle" }}>最高峰。高度・複合的な相談に対応。国家資格の中でも難関クラス。</td>
                  <td style={{ padding: "8px 10px", textAlign: "center", color: "#F5C400", fontWeight: 900, borderBottom: "none", whiteSpace: "nowrap" }}>約10%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 0.09% */}
          <div style={{ background: "#1B2A5E", borderRadius: "10px", padding: "20px 16px", textAlign: "center", marginBottom: "16px" }}>
            <p style={{ color: "#93C5FD", fontSize: "0.85rem", marginBottom: "8px" }}>FP資格保有者に占める割合</p>
            <p style={{ color: "#F5C400", fontSize: "2.5rem", fontWeight: 900, lineHeight: 1 }}>0.09<span style={{ fontSize: "1.2rem" }}>%</span></p>
            <p style={{ color: "#93C5FD", fontSize: "0.75rem", marginTop: "6px" }}>
              ※FP資格合格者数の累計約670万人中、1級FP約6万人（2026年3月現在）
            </p>
            <div style={{ marginTop: "12px", padding: "8px 16px", background: "rgba(232,70,10,0.1)", borderRadius: "6px", border: "1px solid #F5C400" }}>
              <p style={{ color: "#F5C400", fontWeight: 900, fontSize: "0.92rem" }}>FP保有者の中でも希少な存在</p>
            </div>
          </div>

          {/* 今回の1級FPはさらに特別 */}
          <p style={{ fontSize: "0.95rem", fontWeight: 900, color: "#1B2A5E", textAlign: "center", marginBottom: "14px" }}>
            今回の1級FPはさらに特別
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { point: "POINT 1", title: "ロジカルな説明が得意", desc: "ロジカルFPの代表FPは旧帝大理系卒業後、ベンチャー企業でコンサルとして研鑽を積んだ後にFPへ転身。彼のノウハウをベースとして、国公立大卒の優秀なFPがコンサルティングを行います。感情論ではなくデータとロジックで先生のハイレベルな「なぜ？」に正面から答えます。" },
              { point: "POINT 2", title: "AIを凌駕するコンサルティング", desc: "AIは優れたツールである一方、問いの立て方や前提条件によって、回答の質は大きく変わります。診療の現場でも、AIの不正確な情報をもとに不安を抱えて来院する患者さんを目にすることがあるのではないでしょうか。金融も同様です。私たちはAIによるシミュレーションも活用しながら情報を検証し、先生の状況に合った再現性のある資産形成ロジックを構築します。" },
              { point: "POINT 3", title: "税理士とのコラボ", desc: "瀧田潤税理士事務所との協力体制により、FPと税理士の両視点から最適なアドバイスを提供。節税と資産形成を同時に解決します。" },
            ].map((item) => (
              <div key={item.point} style={{
                background: "#F5F7FA", borderRadius: "10px", padding: "14px 16px",
                border: "1px solid #E5E7EB",
                borderLeft: "4px solid #2563EB"
              }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 900, color: "#2563EB", marginBottom: "4px" }}>{item.point}</p>
                <p style={{ fontSize: "0.95rem", fontWeight: 900, color: "#1B2A5E", marginBottom: "4px" }}>{item.title}</p>
                <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.6 }}>— {item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div style={{ height: "4px", background: "linear-gradient(90deg, #1B2A5E, #2563EB, #1B2A5E)" }} />

      {/* ===== FEE SECTION ===== */}
      <FeeSection />

      {/* ===== DIVIDER ===== */}
      <div style={{ height: "4px", background: "linear-gradient(90deg, #1B2A5E, #2563EB, #1B2A5E)" }} />

      {/* ===== CLIENT VOICES ===== */}
      <section style={{ background: "#fff", padding: "36px 16px" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <p style={{ color: "#2563EB", fontWeight: 900, fontSize: "0.82rem", letterSpacing: "0.12em", marginBottom: "8px" }}>
            CLIENT VOICES
          </p>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#1B2A5E", marginBottom: "6px" }}>
            相談者の声
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {voices.map((voice, i) => (
              <div key={i} style={{
                background: "#F5F7FA", borderRadius: "12px", padding: "18px 16px",
                border: "1px solid #E5E7EB",
                position: "relative"
              }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
                  <span style={{ background: "#1B2A5E", color: "#F5C400", fontSize: "0.78rem", fontWeight: 900, padding: "3px 10px", borderRadius: "100px" }}>
                    {voice.tag}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={14} fill="#F5C400" color="#F5C400" />
                  ))}
                </div>
                <p style={{ fontSize: "0.88rem", color: "#333", lineHeight: 1.7, marginBottom: "12px" }}>
                  "{voice.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {voice.avatar ? (
                    <img
                      src={voice.avatar}
                      alt={voice.name}
                      style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid #E5E7EB" }}
                    />
                  ) : (
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "50%",
                      background: "#1B2A5E", display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <span style={{ color: "#F5C400", fontWeight: 900, fontSize: "0.9rem" }}>
                        {voice.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1B2A5E" }}>{voice.name}</p>
                    <p style={{ fontSize: "0.78rem", color: "#666" }}>{voice.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div style={{ height: "4px", background: "linear-gradient(90deg, #1B2A5E, #2563EB, #1B2A5E)" }} />

      {/* ===== FAQ SECTION ===== */}
      <section style={{ background: "#F5F7FA", padding: "36px 16px" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 900, color: "#1B2A5E", marginBottom: "6px" }}>
            こんな疑問にも<span style={{ color: "#2563EB" }}>ロジカルに</span><span style={{ color: "#DC2626" }}>答え</span>ます
          </h2>
          <p style={{ fontSize: "0.88rem", color: "#666", marginBottom: "20px" }}>
            勤務医の先生の鋭い質問にも正面から答えます。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                display: "flex", gap: "12px", alignItems: "flex-start",
                background: "#fff", borderRadius: "8px", padding: "14px 16px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
              }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "6px", flexShrink: 0,
                  background: "#1B2A5E",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <span style={{ color: "#F5C400", fontWeight: 900, fontSize: "0.85rem" }}>Q</span>
                </div>
                <p style={{ fontSize: "0.92rem", color: "#333", lineHeight: 1.6 }}>{faq}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div style={{ height: "4px", background: "linear-gradient(90deg, #1B2A5E, #2563EB, #1B2A5E)" }} />

      {/* ===== APPLY SECTION ===== */}
      <section style={{ background: "#fff", padding: "36px 16px" }} id="apply-section">
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#1B2A5E", marginBottom: "6px" }}>
            お試し相談に申し込む
          </h2>
          <p style={{ fontSize: "0.92rem", color: "#555", marginBottom: "6px" }}>
            ご希望をお選びください
          </p>
          <p style={{ fontSize: "0.85rem", color: "#DC2626", fontWeight: 700, marginBottom: "20px" }}>
            9月申込限定・先着15名
          </p>
          <div style={{
            background: "#FFFDE7", border: "1px solid #F5C400", borderRadius: "8px",
            padding: "10px 14px", marginBottom: "20px",
            display: "flex", gap: "8px", alignItems: "flex-start"
          }}>
            <AlertTriangle size={16} color="#F5C400" style={{ flexShrink: 0, marginTop: "2px" }} />
            <p style={{ fontSize: "0.82rem", color: "#B8860B", lineHeight: 1.6 }}>
              FPの稼働時間の都合上、申込枠に限りがあります。先着順ですので、申し込みはお早めに。
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {applyOptions.map((opt) => {
              const OptIcon = opt.Icon;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleApply(opt.id, opt.path)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: "14px",
                    padding: "16px 18px", borderRadius: "10px",
                    background: "#fff",
                    border: `2px solid ${opt.color}`,
                    cursor: "pointer", textAlign: "left",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "8px", flexShrink: 0,
                    background: opt.color, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <OptIcon size={22} color="#fff" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "0.95rem", fontWeight: 900, color: "#1B2A5E", marginBottom: "2px" }}>
                      {opt.title}
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.4 }}>{opt.desc}</p>
                    {opt.sub && (
                      <p style={{ fontSize: "0.78rem", color: "#999", marginTop: "2px" }}>{opt.sub}</p>
                    )}
                  </div>
                  <ChevronRight size={18} style={{ color: opt.color, flexShrink: 0 }} />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#0f1e3d", padding: "28px 16px 40px" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "0.95rem", fontWeight: 700, marginBottom: "8px" }}>税理士×1級FP事務局</p>
          <p style={{ color: "#93C5FD", fontSize: "0.8rem", marginBottom: "4px" }}>📞 070-9097-3341</p>
          <p style={{ color: "#93C5FD", fontSize: "0.8rem", marginBottom: "12px" }}>✉ info@logicalfp.com</p>
          <a
            href="https://takita-tax-raxy253c.manus.space"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#64748B", fontSize: "0.7rem", textDecoration: "none", display: "inline-block", marginBottom: "8px" }}
          >
            powered by <span style={{ color: "#93C5FD", fontWeight: 700 }}>瀧田潤税理士事務所</span>
          </a>
          <br />
          <button
            onClick={() => setShowPrivacy(true)}
            style={{ color: "#64748B", fontSize: "0.7rem", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", marginBottom: "8px" }}
          >
            プライバシーポリシー
          </button>
          <p style={{ color: "#4B5563", fontSize: "0.7rem" }}>© 2025 All Rights Reserved.</p>
        </div>
      </footer>

      {/* ===== PRIVACY POLICY MODAL ===== */}
      {showPrivacy && (
        <div
          onClick={() => setShowPrivacy(false)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
            zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: "16px", maxWidth: "480px", width: "100%",
              maxHeight: "80vh", overflowY: "auto", padding: "24px 20px"
            }}
          >
            <h2 style={{ fontSize: "1rem", fontWeight: 900, color: "#1B2A5E", marginBottom: "16px", textAlign: "center" }}>
              プライバシーポリシー
            </h2>
            <div style={{ fontSize: "0.82rem", color: "#374151", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <p style={{ fontWeight: 700, marginBottom: "6px" }}>１．個人情報の管理</p>
                <p>当事務局は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・職員教育の徹底等の必要な措置を講じ、安全対策を実施し、個人情報の厳重な管理を行ないます。</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, marginBottom: "6px" }}>２．個人情報の利用目的</p>
                <p>お客様からお預かりした個人情報は、当事務局からのご連絡やご質問に対する回答のご送付のために利用いたします。</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, marginBottom: "6px" }}>３．個人情報の第三者への開示・提供の禁止</p>
                <p style={{ marginBottom: "6px" }}>当事務局は、お客様よりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
                <ul style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>お客様の同意がある場合</li>
                  <li>お客様が希望されるサービスを行なうため当事務局が業務を委託する業者に対して開示する場合</li>
                  <li>法令に基づき開示することが必要である場合</li>
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: 700, marginBottom: "6px" }}>４．個人情報の安全対策</p>
                <p>当事務局は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, marginBottom: "6px" }}>５．個人情報の訂正等について</p>
                <p>お客様がご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, marginBottom: "6px" }}>６．法令、規範の遵守と見直し</p>
                <p>当事務局は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
              </div>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              style={{
                marginTop: "20px", width: "100%", padding: "12px",
                background: "#1B2A5E", color: "#fff", fontWeight: 700,
                fontSize: "0.9rem", borderRadius: "10px", border: "none", cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ===== FIXED CTA BAR ===== */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
        background: "#1B2A5E",
        paddingBottom: "env(safe-area-inset-bottom)"
      }}>
        <div style={{ padding: "10px 16px", maxWidth: "480px", margin: "0 auto" }}>
          <button
            onClick={() => navigate('/booking')}
            style={{
              width: "100%", padding: "14px", borderRadius: "8px", border: "none", cursor: "pointer",
              background: "#38BDF8",
              color: "#fff", fontWeight: 900, fontSize: "0.95rem",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "6px"
            }}
          >
            <MessageCircle size={18} />
            FPの空き状況を確認する
          </button>
        </div>
      </div>
    </>
  );
}
