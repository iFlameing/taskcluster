import React, { Component } from 'react';
import { node, object } from 'prop-types';
import classNames from 'classnames';
import { omit } from 'ramda';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MuiBreadcrumbs from '@material-ui/lab/Breadcrumbs';
import NavigateNextIcon from 'mdi-react/NavigateNextIcon';

@withStyles(theme => ({
  paper: {
    padding: `${theme.spacing.double}px ${theme.spacing.double}px`,
  },
}))
export default class Breadcrumbs extends Component {
  static propTypes = {
    // Properties applied to the Paper component.
    paperProps: object,
    // The breadcrumb children.
    children: node.isRequired,
  };

  static defaultProps = {
    paperProps: {},
  };

  render() {
    const { classes, paperProps, children, ...props } = this.props;
    const paperPropsRest = omit(['className'], paperProps);

    return (
      <Paper
        className={classNames(classes.paper, paperProps.className)}
        {...paperPropsRest}>
        <MuiBreadcrumbs
          separator={<NavigateNextIcon />}
          aria-label="Breadcrumb"
          {...props}>
          {children}
        </MuiBreadcrumbs>
      </Paper>
    );
  }
}
