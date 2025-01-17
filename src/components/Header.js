import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'red' : 'green'}
                    text='Add'
                    onClick={onAdd}
                    text={showAdd ? 'Hide' : 'Add'} />)
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}/* CSS IN JSX
const HeadingStyle = {
    color: 'red', backgroundColor: 'yellow'
}*/
export default Header
