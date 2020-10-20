import React from 'react';

const Landing = () => {
	return (
		<header className='firstPart'>
			<nav className="header">
			<img alt='' src='./images/ironhack-logo.svg' />
        <img alt='' src='./images/menu-top.svg' />
			</nav>
			<section className='header-section'>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use<br></br>
          the most popular frontend library,<br></br>
          and become a super Nunja developer.
        </p>
        <button>
          Awesome!
        </button>
      </section>
		</header>
	)
}

export default Landing;