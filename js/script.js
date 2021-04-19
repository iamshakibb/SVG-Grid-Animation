gsap.registerPlugin(CSSRulePlugin);
const text = CSSRulePlugin.getRule('.container h1::after');

const tl = gsap.timeline({
  delay: 1.3,
  defaults: {
    transformOrigin: 'right center',
    ease: 'expo.out',
    duration: 1,
    stagger: {
      each: 0.5,
      from: 'end',
    },
  },
});

tl.set('.fouc--hero', {
  opacity: 1,
})
  .to(text, { cssRule: { scaleY: 0 } })
  .from('.blueShape', {
    scaleX: 0,
  })
  .from(
    '.redShape',
    {
      scaleX: 0,
    },
    '<'
  )
  .from(
    '.orangeShape',
    {
      scaleX: 0,
    },
    '<'
  )
  .from(
    '.hero__circle',
    {
      duration: 0.7,
      transformOrigin: 'center',
      opacity: 0,
      scale: 0.7,
      ease: 'sine.out',
    },
    '<'
  );
