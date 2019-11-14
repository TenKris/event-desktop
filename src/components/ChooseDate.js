import React, { Component } from 'react'
import '../assets/styles/components/ChooseDate.scss'

class ChooseDate extends Component {
	ChangeDateValue() {}

	// TODO: Add animation when changing month or year with state
	render() {
		const { date, ChangeDateValue } = this.props
		return (
			<div className="ChooseDate">
				<div
					className="months multiple"
					onWheel={e =>
						ChangeDateValue('month', e.deltaY > 0 ? 1 : -1)
					}>
					<span onClick={() => ChangeDateValue('month', -1)}>
						{date
							.clone()
							.subtract(1, 'month')
							.format('MMMM')}
					</span>
					<span className="current">{date.format('MMMM')}</span>
					<span onClick={() => ChangeDateValue('month', 1)}>
						{date
							.clone()
							.add(1, 'month')
							.format('MMMM')}
					</span>
				</div>
				<div
					className="years multiple"
					onWheel={e =>
						ChangeDateValue('year', e.deltaY > 0 ? 1 : -1)
					}>
					<span onClick={() => ChangeDateValue('year', -1)}>
						{date
							.clone()
							.subtract(1, 'year')
							.format('YYYY')}
					</span>
					<span className="current">{date.format('YYYY')}</span>
					<span onClick={() => ChangeDateValue('year', 1)}>
						{date
							.clone()
							.add(1, 'year')
							.format('YYYY')}
					</span>
				</div>
			</div>
		)
	}
}

export default ChooseDate
