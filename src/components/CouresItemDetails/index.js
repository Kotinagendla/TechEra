import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CouresItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    courseData: {},
  }

  componentDidMount() {
    this.getCourseData()
  }

  onClickRetry = () => {
    this.getCourseData()
  }

  getCourseData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        description: data.course_details.description,
        imageUrl: data.course_details.image_url,
      }
      // console.log(updatedData)
      this.setState({
        courseData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderCourseView = () => {
    const {courseData} = this.state
    const {name, description, imageUrl} = courseData
    return (
      <div className="course-content-card">
        <img src={imageUrl} alt={name} className="course-details-img" />
        <div className="course-details-container">
          <h1 className="course-details-name">{name}</h1>
          <p className="course-details-description">{description}</p>
        </div>
      </div>
    )
  }

  renderCourseLoadingView = () => (
    <div className="course-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
    </div>
  )

  renderCourseFailureView = () => (
    <div className="course-failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="course-failure-img"
      />
      <h1 className="course-item-failure-heading">
        Oops! Something Went Wrong
      </h1>
      <p className="course-item-failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        className="course-item-failure-retry-btn"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  )

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCourseView()
      case apiStatusConstants.failure:
        return this.renderCourseFailureView()
      case apiStatusConstants.inProgress:
        return this.renderCourseLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <div className="course-item-container">{this.renderViews()}</div>
      </>
    )
  }
}

export default CouresItemDetails
