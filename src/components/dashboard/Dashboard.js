import React from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import ProductList from '../products/ProductList';

function Dashboard(props) {
  console.log(props);
  const { projects } = props;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
      <div className="row">
        <ProductList />
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
