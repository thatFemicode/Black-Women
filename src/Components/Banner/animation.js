import gsap from 'gsap';

export const bannerAnimation = (
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9
) => {
  //   let imageReveal = CSSRulePlugin.getRule('.img:after');

  let tl = gsap.timeline();
  tl.to(item1, { duration: 0.05, opacity: 1 })
    .from(item2, {
      duration: 0.6,
      y: 60,
      skewX: 30,
      opacity: 0,
      autoAlpha: 1,
      ease: 'power2.out',
    })
    .from(item3, {
      opacity: 0,
      duration: 0.4,
      yPercent: -200,
    })
    .from(item4, {
      opacity: 0,
      yPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: 'Expo.easeInOut',
    })
    .from(item5, {
      duration: 0.6,
      y: 60,
      skewX: 30,
      opacity: 0,
      autoAlpha: 1,
      ease: 'power2.out',
    })
    .from(item6, {
      duration: 0.6,
      y: 60,
      skewX: 30,
      opacity: 0,
      autoAlpha: 1,
      ease: 'power2.out',
    })
    .from(item7, {
      opacity: 0,
      duration: 0.7,
      yPercent: 200,
      ease: 'Expo.easeInOut',
    })
    .from(item8, {
      yPercent: 100,
      scale: 1.1,
      delay: -1.5,
      ease: 'Expo.easeInOut',
    })
    .from(item9, {
      duration: 0.8,
      y: 60,
      skewX: 30,
      opacity: 0,
      autoAlpha: 1,
      ease: 'power2.out',
    });
};
