import { gsap } from 'gsap';
export const preloaderAnimation = (item1, item2, item3, setLoading) => {
  const tl = gsap.timeline({
    onComplete: () => {
      setLoading(false);
    },
  });
  tl.to(item2, { duration: 1.1, width: '100%', ease: 'Expo.easeInOut' })
    .to(item2, { duration: 1.1, height: '100%', ease: 'Expo.easeInOut' })
    .fromTo(
      item3,
      {
        duration: 0.9,
        // scale: 1.6,
        opacity: 0,
        scale: 0.1,
        ease: 'Expo.easeInOut',
      },
      { duration: 0.9, opacity: 1, scale: 1 }
    )
    .to(item1, {
      duration: 0.2,
      opacity: 0,
      display: 'none',
      ease: 'easeInOut',
    });
};
