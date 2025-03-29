import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {PrimeNG} from 'primeng/config';
import {APP_INITIALIZER} from '@angular/core';
import  Material from '@primeng/themes/material';
import {applicationConfig} from '@storybook/angular';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideAnimations} from '@angular/platform-browser/animations';
setCompodocJson(docJson);

function provideTheme(config: PrimeNG) {
  return () => {
    config.theme.set({
      preset: Material,
      options: {
        darkModeSelector: '.my-app-dark'
      }
    });
  };
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [

    applicationConfig({
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: provideTheme,
          deps: [PrimeNG],
          multi: true,
        },
        provideAnimations(),
        provideAnimationsAsync()
      ]
    })
  ]
};


export default preview;
