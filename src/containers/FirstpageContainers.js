import Firstpage from '../components/Firstpage'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Firstpage)
// export default Home;