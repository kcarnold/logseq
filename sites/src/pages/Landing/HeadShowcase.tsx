import {
  ArrowSquareOut,
  CircleWavyQuestion,
  Play,
} from 'phosphor-react'
import { LSButton } from '../../components/Buttons'
import { GlassCard } from '../../components/Cards'
import { WrapGlobalDownloadButton } from '../Downloads'

export function HeadShowcase () {
  return (
    <div className={'app-head-showcase'}>
      <div className="inner flex h-full">
        <div className="item-wrap relative flex-1">
          {/* text layer*/}
          <div
            className="text-1 z-0 w-full flex flex-col tracking-wide">
            <span className="text-4xl sm:text-6xl opacity-70">Connect your notes, </span>
            <strong className="text-3xl sm:text-6xl flex">
              increase understanding.
              <sup
                className="opacity-80 text-logseq-100 hover:opacity-60 sm:translate-y-6">
                <CircleWavyQuestion size={28}/>
              </sup>
            </strong>
          </div>

          {/* image layer */}
          <div className="image-2 z-10 thinker absolute">
          </div>

          {/* cards layer */}
          <div className="cards-3 z-20">
            <div className="r1 mb-3">
              <GlassCard delay={500} className={'a'}>
                <div className="outliner-list-demo">
                  <div className="outliner-list-item">
                    <div className="content is-todo">
                      <span className="marker">NOW</span>
                      <span>
                        Meeting with <a className={'ref'}>👥 Jessica</a>
                      </span>
                    </div>

                    {/* children */}
                    <div className="subs">
                      <div className="outliner-list-item">
                        <div className="content is-todo">
                          <span>
                            She mentioned her current read: <a
                            className={'ref'}>📖 Book/Intertwingled</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            <div className="r2">
              <GlassCard delay={1300} className={'b flex mb-2.5 sm:mb-1'}>
                <div className="avatar flex items-center">
                  <span className="avatar-img">Image</span>
                </div>
                <div className="info flex flex-col px-3 text-logseq-100">
                  <strong
                    className="text-2xl font-semibold text-logseq-50">Jessica</strong>
                  <p className="py-0.5 opacity-80">👥 Person</p>
                  <p className="py-0.5 opacity-80">👤 Jessica Albert</p>
                </div>
              </GlassCard>
              <GlassCard delay={1300} className={'c'}>
                <div className="avatar flex items-center">
                  <span className="avatar-img">Image</span>
                </div>
                <div className="info flex flex-col px-3 text-logseq-100">
                  <strong
                    className="text-2xl font-semibold text-logseq-50">Intertwingled</strong>
                  <p className="py-0.5 opacity-80">📖 Book</p>
                  <p className="py-0.5 opacity-80">👤 Peter Morville</p>
                </div>
              </GlassCard>
            </div>
            <div className="r3 pt-3 sm:px-24">
              <GlassCard delay={2000} className={'d'}>
                <div className="outliner-list-demo">
                  <div className="outliner-list-item">
                    <div className="content">
                      <span>
                        My notes on <a
                        className="ref">📖Book / Intertwingled</a>:
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/*  action buttons */}
          <div className="actions-4 z-30">
            <WrapGlobalDownloadButton
              className="is-super-button"
            >
              {({ active, leftIconFn, rightIconFn }: any) => {
                const leftIcon = leftIconFn?.({ weight: 'bold', size: 18 })
                const rightIcon = rightIconFn?.({ size: 18 })

                return (
                  <LSButton
                    leftIcon={leftIcon}
                    rightIcon={rightIcon}
                  >
                    Download for {active?.[0]}
                  </LSButton>
                )
              }}
            </WrapGlobalDownloadButton>

            <LSButton
              leftIcon={<Play size={18} weight={'duotone'}/>}
              rightIcon={<ArrowSquareOut size={18} className={'opacity-70'}/>}
              className={'bg-logseq-600'}
            >
              Live Demo
            </LSButton>
          </div>
        </div>
      </div>
    </div>
  )
}
