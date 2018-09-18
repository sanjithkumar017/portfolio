import React from 'react'
import {Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const iconComponent = ({onClick, size, name, disabled}) => {
    return (
        <Icon name={name} disabled={disabled} size={size} onClick={onClick} link={true}/>
    )
}

iconComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    size: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
}

export default iconComponent;