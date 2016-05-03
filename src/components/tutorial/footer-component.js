/**
 * @description Footer component.
 */

import React from 'react';
import { Card, CardActions } from 'material-ui';
import FilterLink from '../../containers/filter-link-container';
import { VisibilityFilters } from '../../constants';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

const Footer = () => (
  <Card>
    <CardActions>
      <FilterLink filter={SHOW_ALL}>All</FilterLink>
      <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
    </CardActions>
  </Card>
);

export default Footer;
