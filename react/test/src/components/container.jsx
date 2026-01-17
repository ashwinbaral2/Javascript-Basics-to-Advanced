// ### 3. Passing Components as Props
// Create a `Container` component that accepts a `children` prop. The component should render
//  a card with a header and footer, with the children displayed in the middle. 
// Use this to wrap a `UserProfile` component.

import Header from './headerid'
import Footer from './footerid'

const Container = ({children}) => {
    return (
        <div className='card-container'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Container