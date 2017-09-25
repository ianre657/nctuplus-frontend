
import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = (props) => (
	<footer>
		<p>
			<span>© Copyright NCTU+ 2016</span>
			<a href="https://www.facebook.com/nctuplus" target="_blank">
				<i className="fa fa-2x fa-facebook-square"  />
			</a>
			<a href="https://github.com/t6847kimo/nctuplus/" target="_blank">
				<i className="fa fa-2x fa-github-square"/>
			</a>
			<a href="mailto:nctuplus@gmail.com" target="_blank">
				<i className="fa fa-envelope" style={{ fontSize:28}} />
			</a>
		</p>
	</footer>
)




export default Footer 