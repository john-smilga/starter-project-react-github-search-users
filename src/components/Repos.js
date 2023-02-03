import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const chartData = [
    {
      label: "CSS",
      value: 35,
    },
    {
      label: "Javascript",
      value: 24,
    },
    {
      label: "Html",
      value: 9,
    },
  ];

  const { repos } = React.useContext(GithubContext);

  // forks and stars

  let { stars, forks } = repos.reduce(
    (a, b) => {
      const { stargazers_count, name, forks } = b;
      a.stars.push({ label: name, value: stargazers_count });
      a.forks.push({ label: name, value: forks });
      return a;
    },
    { stars: [], forks: [] }
  );

  stars = stars.sort((a, b) => b.value - a.value).slice(0, 5);
  forks = forks.sort((a, b) => b.value - a.value).slice(0, 5);

  // languages and stars
  const languages = repos.reduce((a, b) => {
    const { language, stargazers_count } = b;
    if (language === null) return a;
    else if (a[language]) {
      a[language].value++;
      a[language].stars += stargazers_count;
      return a;
    } else {
      a[language] = { label: language, value: 1, stars: stargazers_count };
      return a;
    }
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5)
    .map((item) => {
      return { label: item.label, value: item.stars };
    });

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  .image {
    width: 100%;
  }
  .grid-test {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .container {
    width: 800px;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;
export default Repos;

const userHands = 65;
