import { configure, addParameters, addDecorator } from "@storybook/react";
import { GlobalStyle } from "./globalStyle";
import React from "react";
import { Normalize } from "styled-normalize";

addParameters({
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: "bottom",
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme: undefined,
    /**
     * function to sort stories in the tree view
     * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
     * if left undefined, then the order in which the stories are imported will
     * be the order they display
     * @type {Function}
     */
    storySort: undefined,
  },
});

addDecorator((style) => (
  <>
    <Normalize />
    <GlobalStyle />
    {style()}
  </>
));


configure(require.context("../src", true, /\.stories\.tsx$/), module);
