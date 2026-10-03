import { AnimationController } from '@ionic/angular';

export const pageTransition = (
  baseEl: HTMLElement,
  opts?: any
) => {

  const animationCtrl =
    new AnimationController();

  const enteringEl =
    opts?.enteringEl;

  const leavingEl =
    opts?.leavingEl;

  const rootAnimation =
    animationCtrl
      .create()
      .duration(350)
      .easing(
        'cubic-bezier(0.25, 0.8, 0.25, 1)'
      );


  // ==============================
  // OLD PAGE
  // ==============================

  if (leavingEl) {

    const leavingAnimation =
      animationCtrl
        .create()
        .addElement(leavingEl)
        .fromTo(
          'opacity',
          '1',
          '0'
        )
        .fromTo(
          'transform',
          'translateX(0)',
          'translateX(-20px)'
        );

    rootAnimation.addAnimation(
      leavingAnimation
    );

  }


  // ==============================
  // NEW PAGE
  // ==============================

  if (enteringEl) {

    const enteringAnimation =
      animationCtrl
        .create()
        .addElement(enteringEl)
        .fromTo(
          'opacity',
          '0',
          '1'
        )
        .fromTo(
          'transform',
          'translateX(20px)',
          'translateX(0)'
        );

    rootAnimation.addAnimation(
      enteringAnimation
    );

  }


  return rootAnimation;

};