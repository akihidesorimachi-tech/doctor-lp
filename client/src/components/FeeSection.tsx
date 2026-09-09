/**
 * FeeSection - 相談料チャートセクション（改訂版）
 * 参考: kanbe-fp サイトの「1級FP相談料の相場」セクションをベースに改修
 * 「なぜ無料なのか？」を相場の直下に統合
 * Design: Medical Trust Blue（紺×ゴールド×白）
 */

import { CheckCircle } from "lucide-react";

export default function FeeSection() {
  return (
    <section style={{ background: "#F5F7FA", padding: "36px 16px" }}>
      <div style={{ maxWidth: "480px", margin: "0 auto" }}>
        <p style={{ color: "#2563EB", fontWeight: 900, fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "8px" }}>
          FEE
        </p>
        <h2 style={{ fontWeight: 900, fontSize: "1.25rem", color: "#1B2A5E", marginBottom: "6px" }}>
          通常、<span style={{ color: "#DC2626" }}>1級FP相談は有料</span>です
        </h2>
        <p style={{ fontSize: "0.88rem", color: "#6B7280", marginBottom: "28px" }}>
          10事務所のサンプルを調査した平均相談料（1回あたり）
        </p>

        {/* 相場金額 */}
        <div
          style={{
            background: "#fff",
            border: "2px solid #E5E7EB",
            borderRadius: "12px",
            padding: "24px 20px",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "#6B7280", marginBottom: "8px", letterSpacing: "0.05em" }}>
            1級FP相談料の相場（1回あたり）
          </p>
          <p style={{ fontSize: "0.72rem", color: "#9CA3AF", marginBottom: "12px" }}>
            ※10事務所のサンプルの平均
          </p>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "4px" }}>
            <span
              style={{
                fontSize: "2.8rem",
                fontWeight: 900,
                color: "#1B2A5E",
                letterSpacing: "-0.02em",
                textDecoration: "line-through",
                textDecorationColor: "#DC2626",
              }}
            >
              10,920
            </span>
            <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1B2A5E" }}>円</span>
          </div>

          {/* 矢印 */}
          <div style={{ fontSize: "1.5rem", color: "#F5C400", margin: "8px 0" }}>▼</div>

          {/* TODAY'S OFFER */}
          <div
            style={{
              background: "#1B2A5E",
              borderRadius: "10px",
              padding: "20px 16px",
              boxShadow: "4px 4px 0 #F5C400",
            }}
          >
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>
              TODAY'S OFFER
            </p>
            <p style={{ fontSize: "0.85rem", fontWeight: 900, color: "#fff", marginBottom: "4px" }}>
              お試しFP相談
            </p>
            <p style={{ fontSize: "2rem", fontWeight: 900, color: "#F5C400", marginBottom: "4px" }}>
              2回まで無料
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>
              （1〜2回で資産形成の方針は決まります）
            </p>
          </div>
        </div>

        {/* なぜ無料なのか？ — 相場の直下に配置 */}
        <div style={{ paddingTop: "20px" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#1B2A5E", textAlign: "center", marginBottom: "14px" }}>
            なぜ無料なのか？
          </h3>
          <div style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "18px 16px",
            border: "1px solid #E5E7EB",
          }}>
            <p style={{ fontSize: "0.95rem", fontWeight: 900, color: "#1B2A5E", textAlign: "center", marginBottom: "10px" }}>
              <span style={{ color: "#ebc924" }}>瀧田潤税理士事務所</span> × <span style={{ color: "#149fff" }}>1級FP</span> コラボ企画
            </p>
            <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.7 }}>
              勤務医の資産形成・税務支援に強みを持つ瀧田潤税理士事務所が長期目線で行うブランディング施策の一環として、実施しているプロジェクトのため無料です。
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px" }}>
              {[
                "特定の金融商品を勧めることは一切なし",
                "王道のインデックス投資の使い方を中心に中立的に解説",
                "安全資産の選択方法をロジカルにアドバイス",
                "勤務医の収入・税務構造を熟知したFP＋税理士が対応",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <CheckCircle size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ fontSize: "0.88rem", color: "#333", lineHeight: 1.5 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
