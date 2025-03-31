import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {PrimeNG} from 'primeng/config';
import {APP_INITIALIZER, FactoryProvider, MissingTranslationStrategy} from '@angular/core';
import  Material from '@primeng/themes/material';
import {applicationConfig} from '@storybook/angular';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MissingTranslationHandler, provideTranslateService, TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService, Translation} from '@ngx-translate/core/lib/translate.service';
import {Observable} from 'rxjs';
import {MissingTranslationHandlerParams} from '@ngx-translate/core/lib/missing-translation-handler';
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

function httpLoaderFactory(httpClient:HttpClient){
  return new TranslateHttpLoader(httpClient, './trans/', '.json')
}

function missingTranslationHandler(params: MissingTranslationHandlerParams): Translation | Observable<Translation>{
  return params.key;
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
        provideAnimationsAsync(),
        provideTranslateService({
          defaultLanguage: 'en',
          missingTranslationHandler:{
            provide: MissingTranslationHandler,
            useFactory: missingTranslationHandler
          },
          loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient],
          },
        })
      ]
    })
  ]
};


export default preview;
