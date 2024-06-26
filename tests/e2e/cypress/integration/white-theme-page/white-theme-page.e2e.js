/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

describe('white theme page', () => {
  it('should load the white theme page', () => {
    cy.visit('/white-theme-page/index.html');

    // Take a snapshot for visual diffing
    cy.percySnapshot('white theme page | default');
  });
});
