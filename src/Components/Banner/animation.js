import gsap from 'gsap';

export const bannerAnimation = (item1, item2, item3, item4, item5, item6) => {
  //   let imageReveal = CSSRulePlugin.getRule('.img:after');

  let tl = gsap.timeline();
  tl.to(item1, { duration: 0.1, opacity: 1 })
    .from(item2, {
      duration: 0.6,
      y: 60,
      skewX: 30,
      opacity: 0,
      autoAlpha: 1,
      // stagger: 0.9,
      ease: 'power2.out',
    })
    .from(item3, {
      opacity: 0,
      duration: 1,
      yPercent: -200,
      ease: 'Expo.easeInOut',
    })
    .from(item4, {
      yPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: 'Expo.easeInOut',
    })
    .from(item5, {
      opacity: 0,
      duration: 1,
      yPercent: 200,
      ease: 'Expo.easeInOut',
    })
    .from(item6, {
      yPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: 'Expo.easeInOut',
    });
};
