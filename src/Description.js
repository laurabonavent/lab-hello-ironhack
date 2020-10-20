import React from 'react';

const Card = (props) => {
	console.log('Props: ', props);
	const {card} = props;
	return (
		<div>
			<img src={card.imgurl} alt=""/>
			<h1>{card.title}</h1>
			<p>{card.content}</p>
		</div>
	)
}

const Description = () => {
	const datas = [
		{
      imgurl: './images/icon1.png',
      title: 'Declarative',
      content: 'React makes it painless to create interactive UIs.'
    }, {
      imgurl: './images/icon2.png',
      title: 'Components',
      content: 'Build encapsulated components that manage their state.'
    }, {
      imgurl: './images/icon3.png',
      title: 'Single-Way',
      content: 'A set of immutable values are passed to the component\'s'
    }, {
      imgurl: './images/icon4.png',
      title: 'JSX',
      content: 'Statically-typed, designed to run on modern browsers.'
    },
	]
	return(
		<div className="secondPart">
			{datas.map((el, i) => {
				return(
					<Card key={i} card={el} />
				)
			})}
		</div>
	)
}

export default Description;