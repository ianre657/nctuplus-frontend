
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { fetchBulletins } from 'api/Actions/Bulletins'

const mapStateToProps = (state) => ({
  bulletins: state.bulletins.all
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (category) => dispatch(fetchBulletins(category))
})

class WebsiteRevision extends React.Component {
  componentDidMount () {
    this.props.fetchData(2)
  }

  render () {
    return (
      <Bulletin type='bulletin' url={this.props.match.url} data={this.props.bulletins.data} />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebsiteRevision))
