import { gsap } from 'gsap';
export const preloaderAnimation = (item1, item2, item3, item4, setLoading) => {
  const tl = gsap.timeline({
    onComplete: () => {
      setLoading(false);
    },
  });
  tl.to(item2, { duration: 1.4, width: '100%', ease: 'Expo.easeInOut' })
    .to(item2, { duration: 1.4, height: '100%', ease: 'Expo.easeInOut' })
    .fromTo(
      item4,
      {
        duration: 1,
        // scale: 1.6,
        opacity: 0,
        scale: 0.1,
        ease: 'Expo.easeInOut',
      },
      { opacity: 1, scale: 1.6 }
    )
    .to(item3, {
      duration: 0.8,
      width: '100%',
      ease: 'Expo.easeInOut',
    })
    .to(item1, {
      duration: 0.4,
      opacity: 0,
      display: 'none',
      ease: 'easeInOut',
    });
};
