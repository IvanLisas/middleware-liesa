import { of, fromEvent, animationFrameScheduler } from 'rxjs'
import { distinctUntilChanged, filter, map, pairwise, switchMap, throttleTime } from 'rxjs/operators'
import { useObservable } from 'rxjs-hooks'

const watchScroll = () =>
  of(typeof window === 'undefined').pipe(
    filter((bool) => !bool),
    switchMap(() => fromEvent(window, 'scroll', { passive: true })),
    throttleTime(0, animationFrameScheduler),
    map(() => window.pageYOffset),
    pairwise(),
    map(([previous, current]) => (current < previous ? 'Up' : 'Down')),
    distinctUntilChanged()
  )

export default watchScroll
