export function ProjectPreview({ id }: { id: string }) {
  if (id === 'foundry') {
    return (
      <div
        role="img"
        aria-label="Foundry workflow illustration: research, plan approval, design approval, build, review, and local handoff"
        className="flex h-full flex-col bg-[#171715] p-[5cqw] text-[#f6efe1]"
      >
        <div aria-hidden="true" className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/15 pb-[3cqw] font-mono text-[2.4cqw] tracking-widest">
            <span className="text-[#f77756]">FOUNDRY</span>
            <span className="text-white/55">IDEA → PRODUCT</span>
          </div>
          <p className="font-space mt-[4cqw] text-[5.4cqw] leading-tight">
            Build with a plan.
            <br />
            Move with approval.
          </p>
          <div className="my-auto grid grid-cols-3 gap-[2cqw] pt-[3cqw] text-[2.7cqw]">
            {['Research', 'Plan', 'Design'].map((stage, index) => (
              <div
                key={stage}
                className="border border-white/20 px-[2cqw] py-[3cqw]"
              >
                <span className="mb-[1cqw] block font-mono text-[2.2cqw] text-[#f77756]">
                  0{index + 1}
                </span>
                {stage}
                {index > 0 && (
                  <span className="mt-[1cqw] block text-[2.2cqw] text-white/55">
                    Owner approval
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-[3cqw] text-[2.7cqw] text-white/75">
            Build → Review → Local handoff
          </p>
          <p className="mt-[3cqw] font-mono text-[2.2cqw] text-white/45">
            WORKFLOW ILLUSTRATION
          </p>
        </div>
      </div>
    )
  }

  if (id === 'prompt-studio') {
    return (
      <div
        role="img"
        aria-label="Prompt Studio experiment illustration: compare version A with version B after removing the Examples block, inspect outputs, and reuse the prompt"
        className="flex h-full flex-col bg-[#f4eee4] p-[5cqw] text-[#333028]"
      >
        <div aria-hidden="true" className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#333028]/15 pb-[3cqw] font-mono text-[2.4cqw] tracking-widest">
            <span>PROMPT STUDIO</span>
            <span className="text-[#806448]">A / B</span>
          </div>
          <p className="font-space mt-[4cqw] text-[5.4cqw]">
            What changes the answer?
          </p>
          <div className="my-auto grid grid-cols-2 gap-[2cqw] pt-[3cqw] text-[2.4cqw]">
            <div className="rounded-lg border border-[#333028]/15 bg-white/60 p-[3cqw]">
              <p className="mb-[2cqw] font-mono text-[2.2cqw] text-[#806448]">
                A · ORIGINAL
              </p>
              <p className="leading-[5cqw]">
                Role · Context · Task
                <br />
                Format ·{' '}
                <span className="rounded bg-[#dfd1ff] px-1">Examples</span>
              </p>
            </div>
            <div className="rounded-lg border border-[#333028]/15 bg-white/60 p-[3cqw]">
              <p className="mb-[2cqw] font-mono text-[2.2cqw] text-[#806448]">
                B · ABLATION
              </p>
              <p className="leading-[5cqw]">
                Role · Context · Task
                <br />
                Format ·{' '}
                <span className="line-through opacity-45">Examples</span>
              </p>
            </div>
          </div>
          <p className="mt-[3cqw] text-[2.7cqw]">
            Compare outputs → Check → Reuse
          </p>
          <p className="mt-[3cqw] font-mono text-[2.2cqw] text-[#806448]">
            EXPERIMENT ILLUSTRATION
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label="ECG repository result: 98.82 percent reported Random Forest accuracy on a heartbeat-level split, with no patient-held-out or clinical validation"
      className="flex h-full flex-col bg-[#102326] p-[5cqw] text-[#ddf1ee]"
    >
      <div aria-hidden="true" className="flex h-full flex-col">
        <p className="border-b border-white/15 pb-[3cqw] font-mono text-[2.4cqw] tracking-widest">
          ECG · MODEL COMPARISON
        </p>
        <div className="my-auto py-[3cqw]">
          <p className="font-space text-[10cqw] tracking-tight">
            98.82<span className="text-[6cqw] text-[#85b7af]">%</span>
          </p>
          <p className="mt-[1cqw] text-[2.7cqw] text-white/75">
            Reported Random Forest accuracy
          </p>
          <p className="mt-[3cqw] inline-block rounded-full border border-[#85b7af]/40 px-[2.5cqw] py-[1cqw] text-[2.4cqw] text-[#b4d5cf]">
            80/20 heartbeat-level split
          </p>
        </div>
        <p className="border-t border-white/15 pt-[3cqw] text-[2.4cqw] leading-relaxed text-white/65">
          No patient-held-out or clinical validation.
        </p>
        <p className="mt-[2cqw] font-mono text-[2.2cqw] text-white/45">
          REPOSITORY-REPORTED RESULT
        </p>
      </div>
    </div>
  )
}
