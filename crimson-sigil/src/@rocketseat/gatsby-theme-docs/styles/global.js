import React from 'react';
import { useTheme, Global, css } from '@emotion/react';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @font-face {
            font-family: 'Alegreya';
            font-weight: normal;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(/fonts/Alegreya-Medium.woff2) format("woff2");
            size-adjust: 100%;
        }

        @font-face {
            font-family: 'Alegreya';
            font-weight: bold;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Bold';
            src: url(/fonts/Alegreya-ExtraBold.woff2) format("woff2");
        }

        @font-face {
            font-family: 'Alegreya';
            font-weight: normal;
            font-display: swap;
            font-style: italic;
            font-named-instance: 'Italic';
            src: url(/fonts/Alegreya-MediumItalic.woff2) format("woff2");
            size-adjust: 100%;
        }

        @font-face {
            font-family: 'Exocet';
            font-weight: normal;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(/fonts/ExocetHeavy.woff2) format("woff2");
            size-adjust: 100%;
        }

        @font-face {
            font-family: 'Blackmoor';
            font-weight: normal;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(/fonts/BlackmoorLET.woff2) format("woff2");
            size-adjust: 100%;
        }

        body {
          font-size: 22px;
          font-family: ${theme.fonts.body};
          background-color: ${theme.darkcolors.background};
          text-rendering: optimizelegibility;
          -webkit-font-smoothing: antialiased;
          overflow-y: scroll;
          letter-spacing: 0.05em;
        }

        body main header {
          margin-bottom: 35px !important;
          .title {
            width: 250px;
            margin: 20px auto 0 auto;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
          }
        }

        body main nav {
          ul {
            li {
              a {
                color: ${theme.darkcolors.primary} !important;
                -webkit-text-stroke: 0 !important;
                transition: .5s;
                text-shadow: 0 0 3px ${theme.darkcolors.primary_dark} !important;
                :hover {
                  text-shadow: 0 0 1px white, 0 0 10px ${theme.darkcolors.secondary} !important;
                }
              }
            }
          }
        }

        body .dark {
          background-color: ${theme.darkcolors.background};
          color: ${theme.darkcolors.text};
        }

        h1 {
          font-size: 2em;
          color: ${theme.colors.title};
          font-weight: bold;
          margin-bottom: 24px;
          font-family: 'Blackmoor';
        }

        h2 {
          font-size: 1.2em;
        }

        h3 {
          font-size: 1.1em;
        }

        h4 {
          font-size: 1em;
          font-style: italic;
          letter-spacing: 0.1em;
        }

        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.title};

          margin: 24px 0 16px 0;
          font-weight: bold;
        }
        
        .dark h2,
        .dark h3,
        .dark h4,
        .dark h5,
        .dark h6 {
          color: ${theme.darkcolors.title};
        }
        .dark h1 {
          color: ${theme.darkcolors.text};
          text-shadow: 0 1px 0 #999, 0 2px 0 #666, 0 3px 0 #333, 3px 3px 3px #000;
        }
        .dark h2 {
          font-size: 1.2em;
          color: ${theme.darkcolors.text};
          -webkit-text-stroke: 1px #000;
          text-shadow: 0 0 5px ${theme.darkcolors.primary}, 0px 7px 4px #000;

          .anchor svg {
            box-shadow: inset 0 0 10px ${theme.darkcolors.primary};
            border-radius: 6px;
            padding: 2px;
          }
        }

        p {
          color: ${theme.colors.text};
          font-size: 1em;
          line-height: 28px;
          margin-bottom: 16px;
          font-weight: 400;
        }

        .dark p {
          color: ${theme.darkcolors.text};
        }
        
        .primary {
            color: ${theme.darkcolors.primary};
            -webkit-text-stroke: 1px ${theme.darkcolors.primary_dark};
        }

        .secondary {
            color: ${theme.darkcolors.secondary};
            -webkit-text-stroke: 1px ${theme.darkcolors.secondary_dark};
            text-shadow: -1px -1px 1px #ffffff66, 0 0 5px ${theme.darkcolors.secondary}, 1px 1px 1px #000;
        }

        .bold {
            font-weight: bold;
        }

        .stat {
            font-family: 'Exocet';
            letter-spacing: 0.001rem;
            text-shadow: 0 0 15px ${theme.darkcolors.secondary}, 0 0 3px ${theme.darkcolors.primary};
        }
        .crimson-sigil-title {
          font-family: 'Blackmoor';
          color: ${theme.darkcolors.secondary};
          text-shadow: 0 0 3px ${theme.darkcolors.secondary};
          font-size: 1.2em;
        }
        .stat-value {
          font-size: 0.8em;
          font-weight: bold;
          color: #888;
          margin: 0 0 0 3px;
          vertical-align: middle;
          text-shadow: 0 0 10px #000;
          cursor: help;
        }

        code.inline-code {
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          padding: 0.2em;
          background-color: #44475a;
          color: rgba(248, 248, 242);
          font-size: 0.9em;
          border-radius: 3px;
          font-feature-settings: 'clig' 0, 'calt' 0;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }

        h1 code.inline-code,
        h2 code.inline-code {
          font-size: calc(100% - 5px);
          padding: 4px;
        }

        a {
          color: ${theme.colors.text};
          font-weight: bold;
          text-decoration-style: dotted;
          text-decoration-color: ${theme.darkcolors.secondary};
          transition: 0.5s;
          text-shadow: 0 0 5px ${theme.darkcolors.secondary};

          &:hover {
            text-decoration-style: dashed;
            text-decoration-color: ${theme.darkcolors.primary};
            text-shadow: 0 0 3px ${theme.darkcolors.primary};
          }
        }

        .dark a {
            color: ${theme.darkcolors.text};
        }

        blockquote {
          margin-bottom: 16px;
          width: 100%;

          p {
            padding: 1rem;
            border-radius: 5px;
            background: ${theme.colors.components.blockquote.background};
            color: ${theme.colors.components.blockquote.text};
            margin: 0;

            a {
              color: ${theme.colors.components.blockquote.text};
            }
          }
        }

        .dark blockquote {
            p {
                color: ${theme.darkcolors.components.blockquote.text};
                background: ${theme.darkcolors.components.blockquote.background};

                a {
                color: ${theme.darkcolors.components.blockquote.text};
                }
            }
        }

        hr {
          height: 8px;
          background-image: linear-gradient(
            90deg, 
            transparent, 
            ${theme.darkcolors.primary_dark}, 
            transparent);
          border: 0;
          height: 1px;
        }

        table {
          border-collapse: separate;
          border-spacing: 0 4px;
          margin-top: -4px;
          margin-bottom: 16px;
          width: 100%;
          font-size: 0.8em;

          th,
          td {
            margin: 0;
            color: ${theme.colors.text};
            background-color: ${theme.colors.shape};
            border: solid 1px ${theme.colors.shape};
            border-style: solid none;
            padding: 12px;

            :first-of-type {
              border-left-style: solid;
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
            }

            :last-child {
              border-right-style: solid;
              border-bottom-right-radius: 5px;
              border-top-right-radius: 5px;
            }
          }

          tr {
            th {
              color: ${theme.colors.title};
              text-align: left;
              font-weight: bold;
            }
          }
        }

        .dark table {
            th, 
            td {
                color: ${theme.darkcolors.text};
                background-color: ${theme.darkcolors.shape};
                border: solid 1px ${theme.darkcolors.shape};
            }

            tr {
                th {
                    color: ${theme.darkcolors.title};
                }
            }
        }

        iframe {
          margin-bottom: 16px;
        }

        img {
          max-width: 100%;
        }

        img.art {
          border: 1px solid ${theme.darkcolors.primary_dark};
          border-radius: 0 15px 0 15px;
          margin: 15px auto 5px auto;
          width: 100%;
          transition: 0.5s;
          filter: brightness(0.8) saturate(0.7) hue-rotate(-5deg);
        }

        ul,
        ol {
          color: ${theme.colors.text};
          padding-left: 15px;
          margin-bottom: 16px;

          li {
            line-height: 28px;
          }
        }
        
        .dark ul,
        .dark ol {
          color: ${theme.darkcolors.text};
        }

        li ul,
        li ol {
          margin-bottom: 0;
        }

        .gatsby-highlight {
          font-family: Hack, SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;

          position: relative;
          z-index: 0;
          margin: 0 0 16px 0;
          overflow: auto;

          .token {
            font-style: normal !important;
          }
        }

        pre[class*='language-'] code {
          font-family: inherit;
        }

        pre[class*='language-']::before {
          background: #d9d7e0;
          border-radius: 0 0 4px 4px;
          color: #232129;
          font-size: 0.8em;
          font-family: inherit;
          letter-spacing: 0.075em;
          line-height: 1;
          padding: 0.25rem 0.5rem;
          position: absolute;
          left: 1rem;
          text-align: right;
          text-transform: uppercase;
          top: 0;
        }

        pre[class~='language-js']::before,
        pre[class~='language-javascript']::before {
          content: 'js';
          background: #f7df1e;
        }

        pre[class~='language-jsx']::before {
          content: 'jsx';
          background: #61dafb;
        }

        pre[class~='language-typescript']::before,
        pre[class~='language-ts']::before {
          content: 'ts';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-tsx']::before {
          content: 'tsx';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-graphql']::before {
          content: 'GraphQL';
          background: #e10098;
          color: #fff;
        }

        pre[class~='language-html']::before {
          content: 'html';
          background: #005a9c;
          color: #fff;
        }

        pre[class~='language-css']::before {
          content: 'css';
          background: #ff9800;
          color: #fff;
        }

        pre[class~='language-mdx']::before {
          content: 'mdx';
          background: #f9ac00;
          color: #fff;
        }

        pre[class~='language-shell']::before {
          content: 'shell';
        }

        pre[class~='language-sh']::before {
          content: 'sh';
        }

        pre[class~='language-bash']::before {
          content: 'bash';
        }

        pre[class~='language-yaml']::before,
        pre[class~='language-yml']::before {
          content: 'yaml';
          background: #ffa8df;
        }

        pre[class~='language-markdown']::before {
          content: 'md';
        }

        pre[class~='language-json']::before,
        pre[class~='language-json5']::before {
          content: 'json';
          background: linen;
        }

        pre[class~='language-diff']::before {
          content: 'diff';
          background: #e6ffed;
        }

        pre[class~='language-text']::before {
          content: 'text';
          background: #fff;
        }

        pre[class~='language-flow']::before {
          content: 'flow';
          background: #e8bd36;
        }

        input[type=number] {
          -moz-appearance: textfield;
        }

        ${'' /* MENU */}
        aside {
          background-color: ${theme.darkcolors.background} !important;
          nav {
            margin: 0 0 20px 0;
            ul {
              margin: 0 !important;
              li[class*="Heading"] {
                margin: 18px 0 0 0;
                padding: 0;
                text-align: center !important;
                display: inline-block !important;
              }
              li {
                margin: 8px 0 0 0;
                line-height: 20px;
                transition: 1s;
                a {
                  border-radius: 15px !important;
                  font-weight: bold !important;
                  font-family: 'Alegreya';
                  font-variant: small-caps;
                  font-size: 1.2em !important;
                  text-align: center !important;
                  display: inline-block !important;
                  color: ${theme.darkcolors.primary} !important;
                  background-color: ${theme.darkcolors.components.input.background} !important;
                  text-shadow: 1px 1px 3px black;
                  box-shadow: inset -2px -2px 4px #000;
                  transition: 1.5s ease-out !important;
                  :hover {
                    box-shadow: inset 0 0 5px ${theme.darkcolors.primary};
                    text-shadow: 0 0 10px ${theme.darkcolors.primary};
                    transition: .3s ease-in !important;
                  }
                }
                a.active-link {
                  background-color: ${theme.darkcolors.secondary} !important;
                  box-shadow: inset -2px -2px 4px ${theme.darkcolors.components.blockquote.background}, inset 2px 4px 6px #ffffff88;
                  text-shadow: 1px 1px 3px black, 0 0 10px ${theme.darkcolors.primary};
                  transition: 1s;
                }
              }
            }
          }
        }

        ${'' /* FORMS */}
        form.character-stats {
            max-width: 400px;

            ${'' /* .left-side {
              float: left;
              max-width: 350px;
              padding: 0 20px 0 0;
              margin: 0;
            }
            .right-side {
              float: left;
              max-width: 350px;
              padding: 0 20px 0 0;
            } */}

            label, span {
                font-size: 0.8em;
                font-weight: bold;
            }

            input {
                text-align: center;
                background-color: ${theme.darkcolors.components.input.background};
                font-family: 'Alegreya';
                font-weight: bold;
                border: 3px ridge ${theme.darkcolors.primary_dark};
                border-radius: 5px;
                color: ${theme.darkcolors.components.input.text};
                transition: 3s;
            }
            input[type="radio"]::before {
                outline: 1px solid red;
            }
            input:focus, textarea:focus {
                box-shadow: 0 0 15px ${theme.darkcolors.primary};
                transition: 0.5s;
            }
            textarea {
                background-color: ${theme.darkcolors.components.input.background};
                color: ${theme.darkcolors.components.input.text};
                font-family: 'Alegreya';
                font-weight: bold;
                font-size: 0.8em;
                padding: 3px 5px;
                border: 3px ridge ${theme.darkcolors.primary_dark};
                border-radius: 5px;
                transition: 1s;
            }

            .first-row {
                display: flex;
                .left-col {
                    width: 55%;
                    input {
                        width: 100%;
                        height: 25px;
                        margin: 5px;
                        padding: 0 5px 0 5px;
                        text-align: left;
                    }
                }
                .right-col {
                    margin: 0 0 0 20px;
                    width: 40%;
                    text-align: center;
                    .xp-title {
                        white-space: nowrap;
                    }
                    .curtot {
                        font-size: 0.5em;
                        white-space: nowrap;
                    }
                    .input-container {
                        display: flex;
                        text-align: center;
                        input {
                            width: 40%;
                            height: 25px;
                            margin: 5px auto;
                        }
                        input#xpCurrent {
                            border-radius: 20px 3px 3px 20px;
                        }
                        input#xpTotal {
                            border-radius: 3px 20px 20px 3px;
                        }
                    }
                }
            }

            .state-container {
                margin: 10px 0 10px 0;
                width: 100%;
                .input-container {
                    width: 100%;
                    margin: auto;
                    white-space: nowrap;
                    text-align: center;
                    input {
                        display: none;
                    }
                    #inControlInput:checked+label {
                        color: ${theme.darkcolors.primary};
                        text-shadow: 0 0 15px ${theme.darkcolors.primary};
                        transition: 0.5s;
                        box-shadow: inset 0 0 5px ${theme.darkcolors.primary};
                    }
                    #inABadSpotInput:checked+label {
                        color: ${theme.darkcolors.secondary};
                        text-shadow: 0 0 15px ${theme.darkcolors.secondary};
                        transition: 0.5s;
                        box-shadow: inset 0 0 5px ${theme.darkcolors.secondary};
                    }
                }
                label {
                    margin: 0 20px 0 0;
                    transition: 2s;
                    border: 1px solid #444;
                    padding: 2px 10px;
                    border-radius: 6px;
                    box-shadow: inset 0 0 5px #000;
                }
            }

            .stats-container {
                margin: 20px 0 30px 0;
                .stat-container {
                    margin: 10px auto;
                    display: flex;
                    .left-col {
                        label.stat {
                            font-size: 1.2em;
                            display: inline-block;
                            width: 200px;
                            text-align: right;
                            text-shadow: 0 0 15px ${theme.darkcolors.secondary};
                        }
                        input {
                            height: 30px;
                            width: 45px;
                        }
                    }
                    .right-col {
                        margin: 0 0 0 15px;
                        span.stat-desc {
                            margin: 5px 0 0 0;
                            display: inline-block;
                            line-height: 1.2em;
                            font-size: 0.6em;
                            font-style: italic;
                            color: #777;
                        }
                    }

                }
            }

            .stat-bar {
                margin: 10px 0 10px 0;
                display: flex;
                width: 100%;
                max-width: 400px;
                .title {
                    font-size: 0.9em;
                    display: block;
                    margin: 0 10px 0 0;
                }
                label {
                    margin: 0 3px 0 3px;
                    border: 1px solid #444;
                    box-shadow: inset 0 0 5px #000;
                    border-radius: 0 10px 10px 0;
                    padding: 2px 0;
                    color: #555;
                    width: 15%;
                    text-align: center;
                    transition: 0.5s;
                }
                input:checked+label {
                    color: #fff;
                    border: 1px solid ${theme.darkcolors.primary};
                    box-shadow: inset 0 0 5px ${theme.darkcolors.primary};
                    text-shadow: 0 0 10px ${theme.darkcolors.primary};
                }
                input {
                    display: none;
                }
            }

            #traits-container {
              border: 1px solid #444;
              background-color: ${theme.darkcolors.components.input.background};
              margin: 20px 0 10px 0;
              padding: 10px 15px;
              line-height: 28px;
              color: #888;
              border-radius: 10px;
              box-shadow: inset 0 0 5px #000;
            }

            .angle-container {
                margin: 30px 0 20px 0;
                .angle-header {
                    display: flex;
                    .angle-title {
                        display: block;
                        width: 30%;
                        font-size: 1.3em;
                        float: left;
                    }
                    .angle-progress {
                        display: flex;
                        width: 60%;
                        float: right;
                        font-size: 1em;
                        margin: 3px 0 0 auto;
                        input {
                            display: block;
                            margin: -3px 0 0 10px;
                            height: 30px;
                            width: 45px;
                        }
                    }
                }
                .angle-options {
                    margin: 10px 0 0 0;
                    .columns {
                        display: flex;
                        margin: 5px 0 0 0;
                    }
                    .col input {
                        display: none;
                    }
                    .col label {
                        font-size: 0.7em;
                        text-align: center;
                        display: inline-block;
                        width: 95%;
                        padding: 6px 0 6px 0;
                        border: 1px solid #444;
                        border-radius: 15px;
                        margin: 2px;
                        transition: 0.5s;
                        box-shadow: inset 0 0 5px #000;
                    }
                    .col input:checked+label {
                        color: ${theme.darkcolors.primary};
                        text-shadow: 0 0 10px ${theme.darkcolors.primary};
                        box-shadow: inset 0 0 5px ${theme.darkcolors.primary};
                        border: 1px solid ${theme.darkcolors.primary};
                        border-radius: 15px;
                        transition: 0.5s;
                    }
                }
            }
            
            .notes-container {
                margin: 5px 0 60px 0;
                label {
                    display: block;
                    font-size: 1.1em;
                    textarea {
                        display: block;
                        margin: 10px 0 0 0;
                        width: 100%;
                        min-height: 100px;
                        min-width: 100%;
                    }
                }

            }
        }

        div.active-traits {
          border: 1px solid ${theme.darkcolors.primary_dark};
          padding: 10px 20px;
          border-radius: 0 15px 0 15px;
          span#active-traits-title {
            color: ${theme.darkcolors.primary_dark};
            font-size: 0.9em;
            font-weight: bold;
          }
          span#active-traits-text {
            font-weight: bold;
          }
        }

        form.character-traits {
          .trait {
            border: 1px solid ${theme.darkcolors.primary_darker};
            margin: 10px 0 25px 0;
            padding: 20px;
            transition: 0.5s;
            opacity: 0.9;
            :has(input:checked) {
              opacity: 1;
              border: 1px solid ${theme.darkcolors.primary};
              box-shadow: inset 0 0 100px ${theme.darkcolors.primary};
            }
            input[type="checkbox"] {
              appearance: none;
              width: 16px;
              height: 16px;
              border: 1px solid #666;
              box-shadow: inset 0 0 6px #000;
              transform: translateY(0px) rotate(90deg);
              transition: 0.5s;

              ::before {
                content: "";
                font-family: "Alegreya";
                font-size: 14px;
                color: #666;
                transition: 0.5s ease-in-out;
                box-shadow: inset 1em 1em var(--form-control-color);
              }

              :checked {
                border: 1px solid ${theme.darkcolors.primary};
                box-shadow: inset 0 0 6px ${theme.darkcolors.primary}, inset 0 0 20px ${theme.darkcolors.secondary}, 0 0 12px ${theme.darkcolors.primary};
                transform: translate(-8px, 0px);
              }
              :checked::before {
                color: ${theme.darkcolors.primary};
                text-shadow: 0 0 3px ${theme.darkcolors.primary};
              }
            }
            label {
              line-height: 1.32em;
              .stat {
                font-size: 0.9em;
              }
              .trait-name {
                margin: 0 0 0 5px;
                font-weight: bold;
                letter-spacing: 0.1em;
                transition: 0.5s;
                color: #000;
                text-shadow: 0 0 8px ${theme.darkcolors.primary};
              }
            }
            input:checked+label .trait-name {
              margin: 0 0 0 -5px;
              letter-spacing: 0.15em;
              text-shadow: 0 0 10px ${theme.darkcolors.primary};
              color: ${theme.darkcolors.primary};
            }

            input:checked+label +img.art, img.art:hover {
              border: 1px solid ${theme.darkcolors.secondary};
              box-shadow: 0 0 5px ${theme.darkcolors.secondary}; 
              filter: brightness(1);
            }
          }
          .trait.contact {
            margin: 40px 0 10px 0;
            .name-container {
              margin: 10px 0 0 0;
              label {
                border: 1px solid #666;
                padding: 6px 5px 5px 10px;
                font-size: 0.8em;
                font-weight: bold;
                color: #888;
                margin: 0 0 0 0;
                border-radius: 10px 0 0 10px;
                box-shadow: inset 1px 1px 8px #000;
                text-shadow: 2px 2px 4px #000;
                width: 25%;
                @media screen and (max-width: 700px) {
                  font-size: 0.7em;
                }
              }
              input {
                  background-color: ${theme.darkcolors.components.input.background};
                  height: 32px; 
                  width: 74%;
                  font-family: 'Alegreya';
                  font-weight: bold;
                  font-size: 0.9em;
                  padding: 2px 3px 2px 10px;
                  border: 1px solid ${theme.darkcolors.primary};
                  border-radius: 0 10px 10px 0;
                  color: ${theme.darkcolors.components.input.text};
                  transition: 3s;
                  @media screen and (max-width: 1350px) {
                    width: 65%;
                  }
                  @media screen and (max-width: 900px) {
                    width: 50%;
                  }
              }
              input:focus {
                  box-shadow: 0 0 15px ${theme.darkcolors.primary};
                  transition: 0.5s;
              }
            }
          }
        }

        button#add-challenge-button {
          border: 1px solid ${theme.darkcolors.primary};
          height: 35px;
          padding: 5px 10px;
          font-family: 'Alegreya';
          font-size: 0.8em;
          font-weight: bold;
          border-radius: 5px;
          background-color: ${theme.darkcolors.components.input.background};
          color: ${theme.darkcolors.primary};
          box-shadow: inset 0 0 5px ${theme.darkcolors.primary};
          transition: .5s ease;
          :hover {
            box-shadow: inset 0 0 15px ${theme.darkcolors.primary};

          }
        }

        form.challenges {
          input {
            text-align: center;
            background-color: ${theme.darkcolors.components.input.background};
            font-family: 'Alegreya';
            font-weight: bold;
            font-size: 1em;
            border: 1px solid ${theme.darkcolors.primary};
            color: ${theme.darkcolors.components.input.text};
            transition: 3s;
          }
          input:focus {
            box-shadow: 0 0 15px ${theme.darkcolors.primary};
            transition: 0.5s;
          }

          .challenge-container {
            margin: 30px 0 30px 0;
            border: 1px solid ${theme.darkcolors.primary_darker};
            border-radius: 5px;
            padding: 15px 5px;
            transition: 1.5s ease-out;
            &.created {
              box-shadow: 0 0 20px ${theme.darkcolors.primary}; 
            }
            .challenge-inputs {
              width: 98%;
              margin: 0 5px 0 5px;
              .description-container {
                display: inline-block;
                width: 78%;
                label {
                  display: block;
                  font-size: 0.8em;
                  font-weight: bold;
                  height: 20px;
                  margin: 0 0 5px 15px;
                  @media screen and (max-width: 700px) {
                    font-size: 0.7em;
                    margin: 0 0 5px 0;
                    white-space: nowrap;
                  }
                }
                input.description {
                  width: 100%;
                  height: 35px;
                  border-radius: 20px 0 0 3px;
                  text-align: left;
                  padding: 0 0 0 15px;
                  @media screen and (max-width: 700px) {
                    font-size: 0.8em;
                  }
                }
              }
              .progress-container {
                width: 20%;
                display: inline-block;
                float: right;
                label {
                  font-size: 0.6em;
                  height: 20px;
                  display: block;
                  margin: 5px 0 0 0;
                }
                input.progress {
                  width: 100%;
                  height: 35px;
                  border-radius: 0 20px 3px 0;
                }
              }
            }

            .progress-bar-container {
              margin: 12px 5px 6px 5px;
              .progress-bar-outer {
                border: 1px solid #666;
                box-shadow: inset 0 0 3px #000;
                border-radius: 4px;
                height: 10px;
                width: calc(100% -3px);
                .progress-bar-inner {
                  border-radius: 4px;
                  transition: 0.5s;
                  background: linear-gradient(
                    120deg,
                    ${theme.darkcolors.secondary},
                    ${theme.darkcolors.primary},
                    ${theme.darkcolors.background}
                  );
                  background-size: 150%;
                  animation: gradient 40s ease infinite;
                  height: 8px;
                }
                @keyframes gradient {
                  0% { background-position: 0 0; }
                  50% { background-position: 100% 0; }
                  100% { background-position:  0 0; }
                }
              }
            }

            .make-progress-container {
              margin: 0 5px 0 5px;
              .progress-button {
                cursor: pointer;
                background: ${theme.darkcolors.background};
                font-family: 'Alegreya';
                font-weight: bold;
                letter-spacing: .2em;
                border: none;
                height: 30px;
                border-radius: 5px;
                transition: .5s ease;
                :hover {
                  color: #fff;
                  text-shadow: 0 0 5px #fff;
                  letter-spacing: .3em;
                }
              }
              .make-progress-button {
                width:70%;
                color: ${theme.darkcolors.primary};
                text-shadow: 0 0 15px ${theme.darkcolors.primary};
                box-shadow: inset 0 0 6px ${theme.darkcolors.primary};
                :hover {
                  box-shadow: inset 0 0 4px ${theme.darkcolors.primary};
                }
                :active {
                  box-shadow: inset 0 0 20px ${theme.darkcolors.primary};
                }
              }
              .revert-progress-button {
                width: 28%;
                margin: 0 0 0 2%;
                color: ${theme.darkcolors.secondary};
                text-shadow: 0 0 15px ${theme.darkcolors.secondary};
                box-shadow: inset 0 0 6px ${theme.darkcolors.secondary};
                :hover {
                  box-shadow: inset 0 0 4px ${theme.darkcolors.secondary};
                }
                :active {
                  box-shadow: inset 0 0 20px ${theme.darkcolors.secondary};
                }
              }

            }

            .ranks-container {
              display: flex;
              margin: 5px 0 0 0;
              @media screen and (max-width: 1300px) {
                label {
                  margin: 5px auto;
                  max-width: 100px !important;
                  min-width: 20px !important;
                  width: 82px;
                }
              }
              @media screen and (max-width: 1200px) {
                label {
                  margin: 5px auto;
                  max-width: 100px !important;
                  min-width: 20px !important;
                  width: 120px;
                }
              }
              @media screen and (max-width: 930px) {
                label {
                  margin: 5px auto;
                  width: 82px;
                }
              }
              @media screen and (max-width: 840px) {
                display: block;
                height: 100px;
                label {
                  width: 25%;
                  height: 35px;
                  float: left;
                  margin: 5px auto;
                }
              }
              @media screen and (max-width: 780px) {
                height: 50px;
                display: flex;
                content-align: center;
                label {
                  margin: 5px auto;
                  max-width: 130px !important;
                  min-width: 20px !important;
                  width: 100%;
                }
              }
              @media screen and (max-width: 600px) {
                display: block;
                height: 100px;
                label {
                  width: 25%;
                  height: 35px;
                  float: left;
                  margin: 5px auto;
                }
              }
              @media screen and (max-width: 400px) {
                label {
                  font-size: .35em !important;
                }
              }
              .rank-button {
                margin: 0 auto;
                input {
                  display: none;
                }
                label {
                  display: block;
                  cursor: pointer;
                  margin: 5px;
                  font-size: 0.4em;
                  padding: 6px 6px 6px 8px;
                  border-radius: 10px;
                  border: 1px solid #666;
                  color: #666;
                  transition: 0.5s;
                  word-break: break-word;
                  box-shadow: inset 0 0 5px #000;
                  text-align: center;
                  min-width: 100px;
                  .rank-type {
                    font-weight: bold;
                    font-size: 1.4em;
                  }
                }
                input:checked+label {
                  border: 1px solid ${theme.darkcolors.primary};
                  color: ${theme.darkcolors.primary};
                  box-shadow: 0 0 5px ${theme.darkcolors.primary};
                }

              }
            }
            .state-buttons-container {
              display: flex;
              margin: 5px 0 0 0;
              .state-button {
                margin: 0 auto;
                width: 100%;
                cursor: pointer;
                input {
                  display: none;
                }
                label {
                  display: block;
                  cursor: pointer;
                  text-align: center;
                  margin: 5px;
                  font-size: 0.7em;
                  font-weight: bold;
                  padding: 6px 6px 6px 8px;
                  border-radius: 3px;
                  border: 1px solid #666;
                  color: #666;
                  transition: 1s;
                  word-break: break-word;
                  box-shadow: inset 0 0 5px #000;
                  @media screen and (max-width: 700px) {
                    font-size: 0.6em;
                  }
                  @media screen and (max-width: 400px) {
                    font-size: 0.4em;
                  }
                }
              }
              .state-button.state-button-active input:checked+label {
                  border: 1px solid white;
                  color: white;
                  box-shadow: 0 0 5px white;
              }
              .state-button.state-button-fulfilled input:checked+label {
                  border: 1px solid ${theme.darkcolors.primary};
                  color: ${theme.darkcolors.primary};
                  box-shadow: 0 0 5px ${theme.darkcolors.primary};
              }
              .state-button.state-button-failed input:checked+label {
                  border: 1px solid ${theme.darkcolors.secondary};
                  color: ${theme.darkcolors.secondary};
                  box-shadow: 0 0 5px ${theme.darkcolors.secondary};
              }
              .erase-button {
                margin: 0 10px 0 0;
                span.button {
                  margin: 5px;
                  display: block;
                  width: 100%;
                  height: 30px;
                  border: 1px solid ${theme.darkcolors.secondary};
                  box-shadow: inset 0 0 5px ${theme.darkcolors.secondary};
                  border-radius: 3px;
                  text-align: center;
                  vertical-align: middle;
                  transition: .5s ease;
                  :hover {
                    box-shadow: inset 0 0 15px ${theme.darkcolors.secondary};
                    cursor: pointer;
                  }
                  svg.MuiSvgIcon-root {
                    margin: 1px auto;
                    text-align: center;
                    transition: 1s ease;
                    color: ${theme.darkcolors.secondary};
                    opacity: .7;
                    scale: 90%;
                    :hover {
                      opacity: 1;
                      scale: 105%;
                      color: #fff;

                    }
                  }
                }
              }

            }
          }
          .challenge-deleted-anim {
            transition: .5s ease-out;
            margin: 30px 0 30px 0;
            border: 1px solid ${theme.darkcolors.primary_darker};
            border-radius: 5px;
            box-shadow: inset 0 0 5px #000;
            padding: 15px 5px;
            text-align: center;
            vertical-align: middle;
            background: linear-gradient(
              ${theme.darkcolors.secondary_dark},
              #000,
              ${theme.darkcolors.secondary_dark},
              #000,
              ${theme.darkcolors.secondary_dark}
            )
            0 0/100% 200%;
            background-size: 100% 20%;
            animation: gradient 6s linear infinite;
            &.phase1 {
              height: 150px !important;
              opacity: .7;
              box-shadow: inset 0 0 15px #000;
              font-size: .9em;
              filter: saturate(75%);
            }
            &.phase2 {
              height: 100px !important;
              opacity: .5;
              box-shadow: inset 0 0 30px #000;
              font-size: .7em;
              filter: saturate(50%);
            }
            &.phase3 {
              height: 50px !important;
              opacity: .2;
              box-shadow: inset 0 0 60px #000;
              font-size: .5em;
              filter: saturate(25%);
            }
            &.phase4 {
              padding: 0;
              margin: 0;
              height: 1px !important;
              opacity: 0;
              box-shadow: inset 0 0 120px #000;
              font-size: .3em;
              filter: saturate(1%);
            }
            span {
              transition: .5s;
              display: inline-block;
              margin: 0 auto;
              font-weight: bold;
              color: #ffff;
              text-shadow: 0 0 5px ${theme.darkcolors.secondary};
            }
          }
        }
        @keyframes gradient {
          to {background-position:0 -800%};
        }

        ${'' /* GLITCH EFFECT */}
        span.glitch {
          display: inline-block;
          position: relative;
          color: white;
          font-size: 1.2em;
          font-family: 'Exocet';
          letter-spacing: -.1em;
          transform: scale(.95, 1) translate(0, .05em);
          font-weight: bold;
          animation: glitch-skew 1s infinite linear alternate-reverse;
          text-shadow: 0 0 15px ${theme.darkcolors.secondary}, 0 0 3px #fff;
        }
        span.glitch::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          left: 2px;
          text-shadow: -2px 0 ${theme.darkcolors.secondary}, 0 0 3px ${theme.darkcolors.primary};
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        span.glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          left: -2px;
          text-shadow: -2px 0 ${theme.darkcolors.primary}, 2px 2px ${theme.darkcolors.secondary};
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(37px, 9999px, 80px, 0);
            transform: skew(0.19deg);
          }
          5% {
            clip: rect(53px, 9999px, 12px, 0);
            transform: skew(0.93deg);
          }
          10% {
            clip: rect(60px, 9999px, 54px, 0);
            transform: skew(0.18deg);
          }
          15% {
            clip: rect(5px, 9999px, 53px, 0);
            transform: skew(0.06deg);
          }
          20% {
            clip: rect(29px, 9999px, 72px, 0);
            transform: skew(0.23deg);
          }
          25% {
            clip: rect(62px, 9999px, 54px, 0);
            transform: skew(0.34deg);
          }
          30% {
            clip: rect(9px, 9999px, 9px, 0);
            transform: skew(0.75deg);
          }
          35% {
            clip: rect(70px, 9999px, 25px, 0);
            transform: skew(0.62deg);
          }
          40% {
            clip: rect(33px, 9999px, 61px, 0);
            transform: skew(0.83deg);
          }
          45% {
            clip: rect(47px, 9999px, 18px, 0);
            transform: skew(0.36deg);
          }
          50% {
            clip: rect(2px, 9999px, 42px, 0);
            transform: skew(0.09deg);
          }
          55% {
            clip: rect(89px, 9999px, 13px, 0);
            transform: skew(0.57deg);
          }
          60% {
            clip: rect(84px, 9999px, 7px, 0);
            transform: skew(0.54deg);
          }
          65% {
            clip: rect(95px, 9999px, 48px, 0);
            transform: skew(0.68deg);
          }
          70% {
            clip: rect(85px, 9999px, 85px, 0);
            transform: skew(0.45deg);
          }
          75% {
            clip: rect(8px, 9999px, 92px, 0);
            transform: skew(0.41deg);
          }
          80% {
            clip: rect(35px, 9999px, 86px, 0);
            transform: skew(0.03deg);
          }
          85% {
            clip: rect(3px, 9999px, 89px, 0);
            transform: skew(0.78deg);
          }
          90% {
            clip: rect(86px, 9999px, 8px, 0);
            transform: skew(0.66deg);
          }
          95% {
            clip: rect(47px, 9999px, 95px, 0);
            transform: skew(0.37deg);
          }
          100% {
            clip: rect(92px, 9999px, 65px, 0);
            transform: skew(0.29deg);
          }
        }
        @keyframes glitch-anim2 {
          0% {
            clip: rect(80px, 9999px, 37px, 0);
            transform: skew(0.33deg);
          }
          5% {
            clip: rect(40px, 9999px, 55px, 0);
            transform: skew(0.13deg);
          }
          10% {
            clip: rect(65px, 9999px, 83px, 0);
            transform: skew(0.82deg);
          }
          15% {
            clip: rect(31px, 9999px, 37px, 0);
            transform: skew(0.27deg);
          }
          20% {
            clip: rect(92px, 9999px, 77px, 0);
            transform: skew(0.63deg);
          }
          25% {
            clip: rect(87px, 9999px, 95px, 0);
            transform: skew(0.35deg);
          }
          30% {
            clip: rect(37px, 9999px, 12px, 0);
            transform: skew(0.7deg);
          }
          35% {
            clip: rect(90px, 9999px, 39px, 0);
            transform: skew(0.47deg);
          }
          40% {
            clip: rect(99px, 9999px, 37px, 0);
            transform: skew(0.38deg);
          }
          45% {
            clip: rect(55px, 9999px, 7px, 0);
            transform: skew(0.38deg);
          }
          50% {
            clip: rect(51px, 9999px, 36px, 0);
            transform: skew(0.98deg);
          }
          55% {
            clip: rect(41px, 9999px, 13px, 0);
            transform: skew(0.53deg);
          }
          60% {
            clip: rect(39px, 9999px, 74px, 0);
            transform: skew(0.73deg);
          }
          65% {
            clip: rect(29px, 9999px, 5px, 0);
            transform: skew(0.31deg);
          }
          70% {
            clip: rect(43px, 9999px, 22px, 0);
            transform: skew(0.77deg);
          }
          75% {
            clip: rect(49px, 9999px, 90px, 0);
            transform: skew(0.24deg);
          }
          80% {
            clip: rect(98px, 9999px, 61px, 0);
            transform: skew(0.33deg);
          }
          85% {
            clip: rect(62px, 9999px, 96px, 0);
            transform: skew(0.26deg);
          }
          90% {
            clip: rect(15px, 9999px, 75px, 0);
            transform: skew(0.95deg);
          }
          95% {
            clip: rect(28px, 9999px, 4px, 0);
            transform: skew(0.78deg);
          }
          100% {
            clip: rect(35px, 9999px, 90px, 0);
            transform: skew(0.09deg);
          }
        }
        @keyframes glitch-skew {
          0% {
            transform: skew(-1deg);
          }
          10% {
            transform: skew(-4deg);
          }
          20% {
            transform: skew(-3deg);
          }
          30% {
            transform: skew(1deg);
          }
          40% {
            transform: skew(3deg);
          }
          50% {
            transform: skew(5deg);
          }
          60% {
            transform: skew(5deg);
          }
          70% {
            transform: skew(3deg);
          }
          80% {
            transform: skew(-4deg);
          }
          90% {
            transform: skew(-2deg);
          }
          100% {
            transform: skew(-1deg);
          }
        }
        ${'' /* END GLITCH EFFECT */}

        ${'' /* BOOST EFFECT */}
        span.boost {
          display: inline-block;
          font-size: 1.2em;
          font-family: 'Exocet';
          letter-spacing: -.1em;
          transform: scale(.95, 1) translate(0, .05em);
          color: ${theme.darkcolors.components.boost.background};
          background-image: linear-gradient(
            -40deg, 
            #ffffff66 0%, 
            #ffffff00 40%, 
            #fff 50%, 
            #ffffff00 60%, 
            #ffffff66 100%
          );
          text-shadow: 0 0 2px ${theme.darkcolors.components.boost.border}, 
          0 0 3px ${theme.darkcolors.components.boost.border2}, 
          0 0 5px ${theme.darkcolors.components.boost.border3};
          -webkit-text-stroke: 1px ${theme.darkcolors.components.boost.outline};
          -webkit-background-size: 50px;
          background-size: 50px;
          -webkit-background-clip: text;
          -webkit-animation-name: shine;
          animation-name: shine;
          -webkit-animation-duration: 40s;
          animation-duration: 40s;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }

        @-webkit-keyframes shine {
          0%, 10% {
            background-position: 200px;
          }
          50% {
          }
          75% {
          }
          100% {
            background-position: -200px;
          }
        }

        ${'' /* END BOOST EFFECT */}

        ${'' /* ORACLE PAGES  */}
        div#oracles-log {
          border: 1px solid #444;
          background-color: ${theme.darkcolors.components.input.background};
          border-radius: 5px;
          font-size: 0.9em;
          padding: 5px 10px;
          box-shadow: inset 0 0 5px #000;
          height: 150px;
          overflow: auto;
          color: #999;
          transition: 1s;
          :after {
            content: "ORACLE LOG";
            color: #444;
            text-shadow: 0 0 10px #000;
            float: right;
            font-style: italic;
            font-weight: bold;
            font-size: 0.8em;
          }
          .log-entry {
            line-height: 25px;
          }
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
            transition: 1s;
          }
          /* Track */
          ::-webkit-scrollbar-track {
            background: #222; 
            box-shadow: inset 0 0 5px #000;
          }
          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: ${theme.darkcolors.primary};
            transition: 1s;
            border-radius: 3px;
            box-shadow: inset 0 0 5px ${theme.darkcolors.primary};
          }
          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: ${theme.darkcolors.secondary};
            transition: 1s;
            box-shadow: 0 0 5px ${theme.darkcolors.secondary};
          }
        }

        .oracles-container {
          min-height: 850px;
          h4 {
            color: #666;
            text-shadow: 0 0 6px #444;
          }
          a {
            text-shadow: 0 0 5px ${theme.darkcolors.primary};
            color: ${theme.darkcolors.primary};
          }
          blockquote {
            font-size: 0.8em;
            p {
              padding: 0.5em 0.8em;
            }
          }
          .oracle-container {
            display: flex;
            margin: 0 auto;
            .oracle-result {
              width: 75%;
              background-color: ${theme.darkcolors.components.input.background};
              padding: 5px 6px 4px 9px;
              font-family: 'Alegreya';
              font-weight: bold;
              border: 1px solid ${theme.darkcolors.primary_dark};
              border-radius: 3px 0 0 3px;
              min-height: 35px;
              font-size: 1em;
              color: ${theme.darkcolors.components.input.text};
              transition: 1s;
            }
            .oracle-result.toggled {
              box-shadow: inset 0 0 15px ${theme.darkcolors.primary};
              text-shadow: 0 0 15px ${theme.darkcolors.secondary};
              color: ${theme.darkcolors.secondary};
            }
            button.randomize-button {
              border: 2px solid ${theme.darkcolors.secondary};
              overflow: hidden;
              background-color: #000;
              min-height: 35px;
              width: 25%;
              padding: 5px 10px;
              color: ${theme.darkcolors.secondary};
              font-family: 'Alegreya';
              font-weight: bold;
              font-size: 0.6em;
              letter-spacing: 0.1em;
              box-shadow: inset 0 0 10px ${theme.darkcolors.secondary};
              border-radius: 0 10px 10px 0;
              transition: 0.2s;
              :before {
                content: "RANDOMIZE";
              }
              @media screen and (max-width: 800px) {
                font-size: 0.5em;
              }
              @media screen and (max-width: 450px) {
                font-size: 0.6em;
                :before {
                  content: "GET";
                }
              }
              :active {
                box-shadow: inset 0 0 20px ${theme.darkcolors.secondary}, 5px 0 15px ${theme.darkcolors.secondary};
                color: #fff;
                text-shadow: 0 0 5px ${theme.darkcolors.secondary};
              }

            }
          }

        } 

        ${'' /* END ORACLE PAGES  */}

        ${'' /* IMPORT/EXPORT PAGE  */}
        div.import-export-container {
          button#export, input#import {
            width: 100%;
            margin: 10px 0 20px 0;
            border: 2px solid ${theme.darkcolors.secondary};
            overflow: hidden;
            background-color: #000;
            min-height: 35px;
            padding: 5px 10px;
            color: ${theme.darkcolors.secondary};
            font-family: 'Alegreya';
            font-weight: bold;
            font-size: 0.6em;
            letter-spacing: 0.1em;
            box-shadow: inset 0 0 10px ${theme.darkcolors.secondary};
            border-radius: 5px;
            transition: 0.2s;
            :active {
              box-shadow: inset 0 0 20px ${theme.darkcolors.secondary}, 5px 0 15px ${theme.darkcolors.secondary};
              color: #fff;
              text-shadow: 0 0 5px ${theme.darkcolors.secondary};
            }
          }
          blockquote {
            font-size: 0.8em;
            p {
              padding: 0.5em 0.8em;
            }
          }
        }
        ${'' /* END IMPORT/EXPORT PAGE  */}

        ${'' /* HOW TO PLAY PAGE  */}

        div.gatsby-highlight {
          button {
            visibility: hidden;
            top: 7px;
          }
          button:after {
            visibility: visible;
            content: 'EXAMPLE';
            color: ${theme.darkcolors.primary};
            font-style: italic;
            font-family: 'Alegreya';
            letter-spacing: 0.2em;
            opacity: 0.5;
            background: #000;
            padding: 3px 5px;
            border-radius: 3px;
          }
          pre {
            overflow: hidden;
            word-wrap: break-word;
            white-space : pre-wrap !important;
          }
          code .token-line {
            margin: 5px 0 0 0;
          }
        }        

        ${'' /* END HOW TO PLAY PAGE  */}
        
      `}
    />
  );
}