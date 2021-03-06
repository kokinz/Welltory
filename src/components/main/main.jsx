import React, {useState} from 'react';

const Plans = {
  MONTHLY: 'Monthly',
  ANNUALY: 'Annualy',
}

function Main() {
  const [activePlan, setActivePlan] = useState(Plans.ANNUALY);

  const handleMonthlyPlanSet = () => {
    setActivePlan(Plans.MONTHLY);
  };

  const handleAnnualyPlanSet = () => {
    setActivePlan(Plans.ANNUALY);
  };

  return (
    <main className="main">
      <h1 className="main__header visually-hidden">Welltory</h1>

      <section className="main__tariffs tariffs">
        <h2 className="tariffs__header">Take better care of&nbsp;yourself every day</h2>

        <ul className="tariffs__list list">
          <li className={`tariffs__item tariff ${activePlan === Plans.MONTHLY ? 'tariff--active' : ''}`} onClick={handleMonthlyPlanSet}>
            <h3 className="tariff__title">{Plans.MONTHLY}</h3>
            <p className="tariff__price">$ 5.99</p>
            <p className={`tariff__description ${activePlan === Plans.MONTHLY ? 'tariff__description--active' : ''}`}>Billed every month</p>
            <p className="tariff__prev-price">$ 7.99</p>
            <p className="tariff__discount">– 15%</p>
          </li>

          <li className={`tariffs__item tariff ${activePlan === Plans.ANNUALY ? 'tariff--active' : ''}`} onClick={handleAnnualyPlanSet}>
            <h3 className="tariff__title">{Plans.ANNUALY}</h3>
            <p className="tariff__price tariff__price--yellow">$ 4.99</p>
            <p className={`tariff__description ${activePlan === Plans.ANNUALY ? 'tariff__description--active' : ''}`}>$79 billed once a year</p>
            <p className="tariff__prev-price">$ 5.99</p>
            <p className="tariff__discount tariff__discount--yellow">– 25%</p>
          </li>
        </ul>

        <button className="tariffs__button button">Continue</button>
        <p className="tariffs__description">No commitments. Cancel anytime</p>
      </section>

      <section className="main__tariff-plans tariff-plans">
        <h2 className="tariff-plans__header">Choose the best plan for you</h2>

        <div className="tariff-plans__subheaders">
          <p className="tariff-plans__subheader">What you get</p>
          <p className="tariff-plans__subheader tariff-plans__subheader--free">Free</p>
          <p className="tariff-plans__subheader tariff-plans__subheader--pro">Pro</p>
        </div>

        <div className="tariff-plans__table table">
          <h3 className="table__header">Feel better fast</h3>

          <ul className="table__list list">
            <li className="table__item">
              <p className="table__text">Personalized research papers: see how your lifestyle affects your health and what you can do about it</p>

              <p className="table__check"></p>
              <p className="table__check table__check--checked"></p>
            </li>

            <li className="table__item">
              <p className="table__text">Recommendations: get science-backed tips to beat insomnia, cure a hangover, support a panic attack, clear a headache, or get blood pressure under control</p>

              <p className="table__check"></p>
              <p className="table__check table__check--checked"></p>
            </li>

            <li className="table__item">
              <p className="table__text">Personalized move goals: your heartbeat and daily steps data will steer you toward better health — effortlessly</p>

              <p className="table__check"></p>
              <p className="table__check table__check--checked"></p>
            </li>

            <li className="table__item">
              <p className="table__text">Breathing practices: focus or unwind with scientifically-proven guided practices</p>

              <p className="table__check table__check--checked"></p>
              <p className="table__check table__check--checked"></p>
            </li>

            <li className="table__item">
              <p className="table__text">Yesterday's move report: see if you’re doing enough to support your health</p>

              <p className="table__check table__check--checked"></p>
              <p className="table__check table__check--checked"></p>
            </li>
          </ul>
        </div>

        <div className="tariff-plans__table table">
          <h3 className="table__header table__header--large">Gain rich health insights</h3>

          <ul className="table__list list">
            <li className="table__item">
              <p className="table__text">Detailed heartbeat analytics: access stress, energy, and focus scores, metrics and charts — check in on how your body is doing and spot any changes</p>

              <p className="table__check"></p>
              <p className="table__check table__check--checked"></p>
            </li>

            <li className="table__item table__item--second">
              <p className="table__text">In-depth blood pressure analysis: input your numbers and we’ll provide five extra indexes, give detailed interpretations, and alert you if something doesn’t look right</p>

              <p className="table__check"></p>
              <p className="table__check table__check--checked"></p>
            </li>

            <li className="table__item table__item--second">
              <p className="table__text">Blood pressure reports: send your data to your doctor or print out neat reports with all your readings</p>

              <p className="table__check"></p>
              <p className="table__check table__check--checked"></p>
            </li>

            <li className="table__item table__item--second">
              <p className="table__text">Basic heartbeat analytics: just your stress, energy, and focus scores — no extra metrics</p>

              <p className="table__check table__check--checked"></p>
              <p className="table__check table__check--checked"></p>
            </li>

            <li className="table__item table__item--second">
              <p className="table__text">Basic blood pressure analysis: we’ll interpret your top and bottom numbers — without extra indexes</p>

              <p className="table__check table__check--checked"></p>
              <p className="table__check table__check--checked"></p>
            </li>

            <li className="table__item table__item--second">
              <p className="table__text">Yesterday’s heart report sent to your feed daily: note the relationship between your activities and any changes to your heart rate</p>

              <p className="table__check table__check--checked"></p>
              <p className="table__check table__check--checked"></p>
            </li>
          </ul>
        </div>

        <div className="tariff-plans__wrapper-buttons">
          <button className="tariff-plans__button button tariff-plans__button--upgrade">Upgrade now</button>
          <button className="tariff-plans__button button tariff-plans__button--free">Go with the free version</button>
        </div>
      </section>
    </main>
  );
}

export default Main;
