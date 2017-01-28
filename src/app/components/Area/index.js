import React from 'react';
import cx from 'classnames'
import connect from './connect'
import Seats from 'components/Seats'
import InfoPopup from 'components/InfoPopup'
import FormPopup from 'components/FormPopup'

const Area = (props) => {
	let klass = cx('iquiz_tables--area', `-area_${props.pagination}`, props.className)
	return (
		<div className={ klass }>
			<InfoPopup />
			<FormPopup />
			<Seats />
		</div>
	)
}


export default connect(Area)
