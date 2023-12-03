(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const v='<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.166 9.767v1.9a5.833 5.833 0 0 1-11.667 0v-1.9a.6.6 0 0 1 .6-.6h10.467a.6.6 0 0 1 .6.6zM10 7.5c0-.833.595-1.667 1.785-1.667v0a2.38 2.38 0 0 0 2.381-2.38v-.536M6.667 7.5v-.417a2.5 2.5 0 0 1 2.5-2.5v0c.92 0 1.667-.746 1.667-1.666V2.5" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.334 9.167h2.083a2.083 2.083 0 0 1 0 4.166h-1.25" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',A='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1a10.66 10.66 0 0 1-9-4.53s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',w='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" stroke="curentColor"/><path d="M17.5 6.51l.01-.011" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',C='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',E='<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.098 12.252l-3.432.665c-2.318-1.164-3.75-2.5-4.583-4.584l.642-3.441-1.213-3.225H3.729c-1.127 0-2.014.933-1.828 2.045.398 2.373 1.471 6.327 4.349 9.205 3.023 3.023 7.316 4.415 9.888 5.012 1.161.27 2.195-.638 2.195-1.83v-2.615l-3.235-1.232z" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',j='<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.666 8.333c0 3.682-6.666 10-6.666 10s-6.667-6.318-6.667-10a6.667 6.667 0 1 1 13.333 0z" stroke="curentColor" stroke-width="1.5"/><path d="M10 9.167A.833.833 0 1 0 10 7.5a.833.833 0 0 0 0 1.667z" fill="curentColor" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',k='<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_217_1736)" stroke="curentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5v5h5"/><path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666z"/></g><defs><clipPath id="clip0_217_1736"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>',I='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 12H6m0 0l6-6m-6 6l6 6" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',y='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h12.5m0 0l-6-6m6 6l-6 6" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',x='<svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.706 18.63c-.037-3.998 3.358-5.943 3.513-6.033-1.922-2.733-4.902-3.107-5.95-3.137-2.502-.256-4.93 1.46-6.205 1.46-1.3 0-3.263-1.435-5.38-1.393-2.722.041-5.27 1.579-6.666 3.965-2.884 4.867-.733 12.019 2.03 15.953 1.38 1.926 2.995 4.077 5.109 4.002 2.068-.084 2.84-1.286 5.335-1.286 2.472 0 3.197 1.286 5.353 1.237 2.219-.035 3.616-1.935 4.95-3.879 1.596-2.208 2.237-4.383 2.263-4.494-.052-.018-4.31-1.602-4.352-6.394zM22.635 6.873c1.112-1.356 1.873-3.201 1.661-5.073-1.61.07-3.622 1.086-4.781 2.412-1.026 1.168-1.942 3.084-1.705 4.885 1.808.132 3.664-.89 4.825-2.224z" fill="curentColor"/></svg>',M='<svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.756 3.203c-.363.37-.572.946-.572 1.692V31.5c0 .745.21 1.321.572 1.691l.09.081 15.29-14.902v-.352L3.846 3.116l-.09.087zM26.078 23.34l-5.092-4.97v-.352l5.098-4.97.114.065 6.036 3.349c1.723.95 1.723 2.514 0 3.47l-6.036 3.343-.12.065zM25.273 24.2l-5.211-5.08-15.38 14.997c.572.586 1.505.657 2.566.07l18.025-9.986zM25.273 12.188L7.248 2.2c-1.061-.58-1.994-.51-2.566.077l15.38 14.99 5.211-5.08z" fill="curentColor"/></svg>',S='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.888 13.5C21.164 18.311 17.013 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2c4.1 0 7.625 2.468 9.168 6" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 8h4.4a.6.6 0 0 0 .6-.6V3" stroke="curentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',B="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/coffee-1-91d7c819.webp",Q="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/coffee-2-d1f0b71d.webp",O="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/coffee-3-daa8481e.webp",F="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/coffee-4-9e9e0ab0.webp",P="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/coffee-5-1d87b0f7.webp",z="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/coffee-6-17f08b2f.webp",L="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/coffee-7-8a3705c8.webp",R="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/coffee-8-41335ace.webp",U=`
<img width="16" loading="lazy" height="16" alt="coffee" src="data:image/png;base64,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">
`,G=`
<img loading="lazy" width="16" height="16" alt="tea" src="data:image/png;base64,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">
`,_=`
<img loading="lazy" width="16" height="16" alt="dessert" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAVTklEQVR4nO2aW8wl2XXXf2vtqjqX73y37unuuTozntgh2B4gRMFWiEGIoDgXhCyDgqwghQceDIrATwRekJB4IRIPEQKBEUI4sQSJ5USJI0NMbk6MPY7teDyMZ9ztnhnPTHdPd3+3c6/aey0edtW5tGcGO3ZnQMyW6jtfVZ1Te13/a+3/LnhjvDHeGG+MN8b/v0Ner4n/6MnHD/qDQQQmr5cMAMXTX/vy6zLxb37qY3/vh975V38dePJ1EaAdxTL+yTjge/cffpOMJ98dvAw/9+/+Zf9L9kf/9JFH3jzhdTaAfPz3fvGuTvAj7/xbZf35z/2j+Pu/8zPpq1ceuFqf8dvn6/oP5WZ1/uDijT//1r/y14HP3lUhXmPIf/7lf33XHv6jf+m9uvPEUx+Kv/ZLP11d+Tpfbl7mv35fyemFPfqx4vT4jP3qwhcfuu9Nn/r+t73z9tsf/sEvaq/8CvCVuybUHUNOj27ftYc3T3zhX/Q//us/G66/SH31Ok+GMc/vwDOauPq281x88BJHN25zenqLP/XgW/nBt/8w5w/vf/ng4OKn9w8vfqQc7fwmcPcEBORkeneePzyZv3fxH//9L8vTT5COTomzOSnC9ZtTPvZnKq69+37u6+/iKTAezygL6PcD9+wf8rYLP8C5nfsJ/f5To93z/+3chUu/ADx+N+SUs7Ob3/GH7vT27pn9woc/ab/xK4+l45s0DcRhiZ823F40fG53ybOPDuj9xbewu3fAfNawmM545NwjXDp3H4eDCxRSYe6EUNAbjE5Ge+d+f/fgwq8OBnsfBW59p2QtynL4nXrWalx5/H88dv6Ln38s3bhB7YlmCUQBM/ZGfd59JNj0lFs/XNG7MCAdGcmVXn+HB3bfikkkeSLgOMZ8dnqwmJ/92MnR9R8b7Oz/g73Di7+6Ozr4D8DVb1fWwlL97Wvcjs9/+uM7UewndybNT42mU5qzCSkEPBQIkX5ZkHqB6mDIub5x+eYtlpevM6kbDt72ELd6z/PcfMAD/beAAyKIKIgBTmwWjI8X75hPTt4xHh387YNzl/7L/uGFD/NtlFKp6+m3rfjjv/srlbu/391+ugn6Q3u3p9zzsU+SnngSgtAbDFm6U7lDv4eo8lKa8blmgh47ZyHRvPtRHviJP0cRhId7jzEo9kEt96puiLDdt7pQFCXDvcOXdvcv/KfhcPdDwNe+VdmL5WL2x1b8S4//d3X3H8X9A+7+HnMHh/LlY/zlIwKC7gxpYqQ5m+ABdFkQEuyJ8Y5Zw7EGLmiPod3PXv/7MY8UFKRUow6iApIPQUA820TALDI9vXn/cnb2s8Pdw/cenL/vX+3uXvhFYPxNG2Aw3P9jKf+Z3/6ld7nbB939fe5ZKFOhWjSMnn0Jjm8iYuhiSZxPKeol0SGJEFyYBog4QZ2wP+Lw7Y+iwz5pNgd3oMFdEVcQBTo7aCuBIzgiisWG6dmt76mX03+7ODh778HBpX8OfOqbMkCz/NZa4S985hN/wcw+4GZ/ExjgjrvjgKsyvHVK/8pVmuWCqDC9fcbCEtITmphwFyw5J01ikiD1exxcOMQuHRIXc9QjQQOiiqq0SvuGBNnYIkCOiXzNjbiccnL7xb+2mI/fdXBw78/vHdz788D11zRA1Rt9U4p/9nc/+pil9EF3e5/jOyC4rwXroiCdHDF58QXC2ZRFWnK8mHMcE02h1MmxaDTmNGUgjYaE/R2qd7yZ0d4OIUVCURBCQIKgqgidEWR1OA4iqLSgIK0hBMQb6vnJ7u24+CfL5fjHD84/+I+B33g1vWSxOH1Nxb/w6U/8WbP4993sb7j7PSKCe4tNtN53xywDlp2csPyt/8nkia9wdHpGjTGtSiZVgYVAUSjDQY/DcwfsPXAvOw89wP6bH2F0cEgoCjSEfKgQ2s8uElTW/wugrWGyMTbjwcEdR5CiP+/vXPw3Mfk/4xWwQW7deOYVFb/81BcfsxQ/6O4/AZzrFM5T54kEMMvKmyXMEq5CtMTs+JTp+AxSRBW0UMqypKgqBoMBg9GI4WiHqj+gLEqKoISgBBWCZu+qZHVwz0p7F/qsVF2VBumcsn3fUswXiuEnvTr/fuDGlgFuvvilLcW//tzV746p+YCl9JPg920CTxfyXQSI5P/djVwBHBEhlAVlWSIqqEIZlBACRVC0zW0VIWj2agazzrTeKt360jtF27HScJvL2TBF+3Pf+Jnhnqj6hx8GfmrLACfP/R4AL9xe7C5mJ/8Q/O+K8HAHQrR5l+eUVvF8LYenEraUkpU3BLJHRVp5W4l8W8lNL77q8Fe/sKX8ygB3fNsMEXwwPP9+4CPd9aIIFcvqvvuXi89+CNJ7yqqiLAtCkRULQQkt4HSKbyqoKzAy3DIe0EVDNv5a3JUhWm075HpV7deB3sXG6rztFDP4dibwNjodMMRt61nuLrPprZ8J0vsYMAcolrMxodr/O+d2y/cU1S4hhJVHO2/ja8/lULc8Zdv4tCfg+SP/ULcmX3/IHQrJ6vCtLM6phRt4ao8GUg0ewZZYXKICJoKl1EaqQhji1TlUC8TjlknN/Qco/D3ARwGKJM5uJfeWh7sggWRg7rg55p0QK5HafF2nxMatXAU6o4vgtEbojNHZEWujxMBq8IT4EmwJpKykzVESYnMkTvFmDLZE0hJ8gacFhUeKXsn09oJ6UTM6VyGiuPaIw+/B9r4PKUYIae0KUU2p+ZG1AVKDip4WOC4CSptDwmb/sS57bUB0Eesrs+TAk03FIlhEfA7eILZE0hRv5qgvEE2QJihLSFOEiEjAmwUW57kZ8gYzw1PEo6+MJ9RorwexoJQFoWzQ5KiUWBMJsxegmZDO/2W0GG4ZAfxPl8PzPWBZlMNz4H7TRQElKATAFMylxSvBuigXcMs55hbBE241nmZgS4JNkOYUSWOEGWILaObgNdgSt4TaEvEGkxwcqhGocBnkspVqNPQRb3CL7XwFUgBoPjfFkmBeUO7tIjG30K4BasXjjDB5Aobfhe2+PafnKj95NNWz7wKeKVI9w5viqoSBO5LT2h1zw8xxT1iKmNW4LcEWiE1RX0KaIGmM2hRfniKSwCZImmNUODVCwLwHXiOpxs2RMgD9DFJt3jqCpXqjODTr6At93FIW3QWXhBZVm1OGmAIFYGCCakkoB3iao/NnsZ23gJa4p/wb4aJb81bgmcKtYTY5vmVptnCvBx7nWJrnfPMab47xZgKWCMwpSkN8hqcasUQQkKKHecRTxByMok0bbbWpcU+4KqKKERCaFh7K3EXaEpE+HnqIzxEsPzcpxIgIWHRECySEjPZa4GmJuSMecmqECscQzekk8WVifQb9CxlfANzV3R4BKNyNk+OXj2T+5ElPbw80Q2V2zPImYjVS7qGiSDxBvEK0QpJD6OGhwkiYFsACNzJid8juEaSXEd4iogGsyUKK4hjuJaIKUqIYSMi54YZ4AlVSglCAOUBAiOQA6iMswSIuIOpIW4IFITWnqJ1iXFzhGICndAFALSX6+4e33aY3vZm1ERJxaxBVpDpEqwtINcS1YLmMpMYph+cIvQFIxC3l9JAyC6890AqTAe6SUV6r7D1qEMUpsqGsAXFcAoghmhdCQiQjcgFSoAjmoZ0r3xMiQtMaL2MvlnNd1PJ3myk0p6y6yu5AhiAUIIiEU4qdm94cgdW4lpBmUOyCFHi8jVsDXmUgKQTTJamp8eSoL1phQ1v6rPUeUI7AIniDq+Jegha5h+j8JIqnJkddcBDFKMHCuvkRbRXPNR+Fosg9ijc1IhACqM/zuqRJmAuUvTbqtwoX4EVOAZx6EZPQPyZka7sEVAuQEveIaj97TJXgNSIRa+a5y3MBHYApnuY5By2hEkADBsTYoCGDnZmg6ohYa9wGBFTbCABSqnFXNCRSMwdXPLWNV1EgyVBRzBWRCi93cB1AOcSklwFYB3jYwcIIeveiAo62QLhG2aKzRyj7pytHOriUGWFztmKWEK8zyyOaAY/c7KgIooJ7lcOQPgQFX+ba7QVOyH2Blq0nLeeyWy6jWiDatrICEto0Cfu4DJBeDw87oMOM8DIE7UO5A2GASwVa4VohFBlwXVF33GKWXxRLlps7mGUDtDFWu54OpWxXeHWuz5C9lJaIgxKAhCFgATyh2lpWBDRkoKOG1GAeQCDIHE+hDfkGd9CywpJDsYdLwGWAlkMsDJFiCGEHlxGqQwhDCL0VtogWILpa/9uqZc6He2qbMLKBVw3dFrN62kZAHqnhiNDPDYvXOQxCr21xC4p+hXjKCGvL/KCij2i2bm5YJHsuJZwKY5ABrneI6ADCAAk7eNjBwwDVEsIeEnYg9JDQQ6RTMLQtd0tueNt8rVrotEHI2MYSuGtVfQV8mytD0dxIJbfnAIouI6re6DQtUgYSEdwV80CQJSIxR4E0eNu+iQRMergMkaLEpQ8ywEUhnMPDXi55YYiGHSQMQHu5EmiRc002YWkFz60n40rxFQ/RKQgrHnKF7mzo3d3v7LE5R95raMTtOkCxCggtji0uMBqk2MVdEHE87IFkwkN7hyBDvBhBsYtoDwkDRHugfUTLFixDS2G3IbdidjYEaRVcX1upuLq2udjc9mP3FW9/sbFGae1nm0b6Bi6BU4GbWwYI1cGR7H5vKkqCFPuI9nNIFiNUqxyS2kNCxap0oavGYjNUnS4fu+vbBWjrX/ct+Tom506ZfWOatZc3j85g/g3PvHO429jcxwCFtU8+f8+bToSH5qLlKFNg7UqllUbIuddZHE8YqQ3PDaFXSm9NufW58tRKIN/+5qZN73zKptKb5ytjboQCmW7zjmZwxyySPB07nEHbBwCURXECOgUfdWCTV2Hd5Nue2bi1FX6bkm5e27q9ur/RnPor3L/zeW00+YY8W4bvFN0kcbrGjFwtoidwv826DLZeMT9D0gS4lIV4Za91ynv3nQ2QcV9/sYus/FfWYbnhrTuVv8Pc20ptW+eO0TFOHQEjG1GUEDfMjWQpO9U5655abNBmM77hlbVWgg1XmLcG2ITeNvfW17v63BlmOxR845/XytWVCJuyiOZLHcB2ZZFcOdSXeD2DOEVsisuA2LtISpZb6Gzcs+6pqxRANg2wQVSugCX3headpzsSUjYAaA1InbFWz/8/atrOtyJK11VEaHehPOHeZLYpZXaJNIE4QeIEqU8QG+PNGbY4w9MCzr+LWNyzUr7VZ7VdVmx4pwaZsnbg1jA6z7PSdNPrK4xolV4bYkO51b/dImhNiGZnOpnNTXnxleYQF6Q4xeMY4hiJY7wZI5aVt2aaqTYaPNU4glsiNREoQPNSfAXW2RmrbfRVK/z1F77uDz340HQrf1hBzzpvV8m5bkQ6Rnilp+e1gbiTV4d39gNto5OyNz1OMyGapnhzijVZSW8mWDPB4wxPc9wiQQxVaQG6ZSJFMAFL0i6HA8ksN16y0xK1XbfIHHy1G1Q4W16arJXoFF2T1lvlXCSvm0QwlxZ423AFcslMeFrmULQFxBkeJxDHeBxjzRnSjCFNssepSfUccSN17W3HYqljBhIEPK8D3GLmLABrmrxwM4hNbs1Dr4fIgNVeRZb9Gcf/19oA26i68bZE1lZlve0gkpniNf5l0oG0xL3B4xyLUyxOoDnD04S0OCEtT1Eyj+9pmRlaq1tSlRwtXXSYYVrhSdpVW8YC94QIxNoI6mjRIn4yXBKQ9wXcI6lOeFwSRgOsGLRrhVU1e4ENsC829RfR6bqk5N8kc9wS5gmLi/aYY2mCN6d4fYqnCZ6mWJzncG3GeFrgViPSw81prMlskQkaFDdbx1bq9NT8RkhKeMz4gttqL8KldYiAJWvx0iAmCBDdSI1lWiwoLkNM+rhtrgg52vR4sen/2XwxrgolxiWpmRLrMZamWHNGWo4hnkE6w+I8M8LNGCkqXCTzA02O10xaVi0d1mKK9vK5WLdbllePQMcgoZL7+CZXl7zFkDDLzxRtgTJa+86AIZJRRoOymEaaaUMIeVopRnhLum5s4VzdMsAm4p2dPD1mfg2xGdZMsHoC0mR+PsbWGzUWa0IIOCXeWF4ESQ9jkRWJAClzCdbWXpNMcIrgyQHNS1rZeNXFwesaMwHJonVNF7EhBGkx13KDp4K7YLHBF4m4zEvj1NqzKHYxMkfRarkU+MS2ATZTwGeT6dFTVC3XhkXMLb+poQVpOc9b5donpgbVgKfUrs1pvd1tm0Fq7+X9BctGSymTljiestdFWqoqRjAnJceszunha7RPtaMt7+JNm9fiufyliJmRFpHURIrhHlV5iKO3wL8M/BbwBw5/8KopYDY6FeljpFyi3DJBaYKnZtXOetOgQTEvMhHiMa+zNeAec35LlclQMVJ0BKFpEiqeWV/Nu062TKjmsihimAspJppFzHjQljzFsRjbsudgCaE1fBBEi5Sa8kaS3Wfp964UFx55VkYPPuVmjwNXeJVWrNg8qevxqbm6xoVk5NScnm4ttRSyt63j1SLiKVNSIojlXdzURJIlql7AYreFFtpNE0esVaxpkBTJa8z8ik2zzCie53NicrB2G74MUJY3iPp8UVXPetF7sdLetSBcm8nh84z2nksiLwH1OML4ymdeSedtA5x99ZOrk3MPPzYzs9o89oC8IYnnuiuKpQYsc0hicY2ukrl4LNfu2IB7pFGwOm+lY6ltmfPvPRkSM8nq3qYKsBgnUtRUDPrXRHsvEPRGMaxeCjvVlVD3nrYxVwZvvvQCG+/7ODAAoGk/v/lR7O+sX5WNtU+SMZeUeiBtqcqHm+UdHWtbVaRdhxieUqad2yV07juMuFy0LKxDyrW66x0sgYRqqVpdVw0vuOi11Axf3L20c5lKv+Jy8bIVo2vAspPPesAuzBffopavZYD54mB1Up67NvEU5paag8zht2CFt6HvGXEt4clyRODZAOQNVU8Rd8+tqLV13nSMyO1QDI9EqmvaG1zW0H+yYvnM8KD/7G2K652i6xd3j7ijZN+VUSzk+dVJ3x6dLWNaeLtySjHndN6YTHhq8FiTmiWeaiy27aqWSYvyyC0cSzk8CYRbqoPnUzm8XEl5WYvBs5PGb4ZBfeIw64jYOTvMl68o15/YKFhWq5Oq99Bs3LwUrJ4D+RVUs3YjJNPPE0/FiWt1TULva1T9r2p/53KhvavB00tGOK5H5yep9WbeBcgjb7P83zcKGz64Ohnu3Hc823/Tzy1O6veppUILeYmwcyVJ9fRQ+s+FEG5rZUdS7awopf/XR3HPaF0Jz176QxvuPfCRGBdPlyxKleq6hNGLZ026MevqqAHfQRB6vcf/BmWAAZxyCxlsAAAAAElFTkSuQmCC">
`,d=v,T=A,N=w,K=C,J=E,W=j,H=k,q=I,V=y,Y=x,D=M,Z=S,X=U,$=G,tt=_,{BASE_URL:i}={BASE_URL:"https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},r=window.location.pathname,et="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/logo-be574984.svg";const c=[{name:"logo",link:"enjoy",anchor:"enjoy"},{name:"Favorite coffee",link:"favorite-coffee"},{name:"About",link:"about"},{name:"Mobile app",link:"mobile-app"},{name:"Contact us",link:"footer"},{name:"Menu",link:`${i}menu/`}],m=c.slice(1,-1);function u(){let e;const t="#";r.includes("menu")?(e=`${i}#`,c[0].link=i):(e="#",c[0].link=`${i}#enjoy`);let o="";document.querySelector("body").insertAdjacentHTML("afterbegin",`
  <header id="header" class="wrap mx-auto mt-5">
    <div class="header__bar">
      <a href="${c[0].link}" id="logo"
        ><img
          loading="lazy"
          src="${et}"
          alt="${c[0].name}"
      /></a>
  
      <nav class="bar__nav">
        <ul id="nav-list" class="nav__list pl-0">
        </ul>
      </nav>
  
      <a
        id="nav-menu"
        class="bar__coffee-menu nav-item"
        href="${c[5].link}"
        >${c[5].name}
  
        ${d}
    
      </a>
  
      <button id="burger-btn"></button>
    </div>
  </header>
  `),m.forEach(s=>{o+=`
    <li>
          <a
          id="nav-${s.link}"
            href="${s.link==="footer"?t+s.link:e+s.link}"
            class="nav-item">${s.name}</a>
    </li>
    `}),document.querySelector("#nav-list").insertAdjacentHTML("afterbegin",o)}const ot="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/img-hero-79fa768e.webp",nt="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/video(2160p)-b795aee4.mp4";function st(){document.querySelector("#header").insertAdjacentHTML("afterend",`
  <main id="main" class="wrap mx-auto">
    <section id="enjoy" class="section mt-5">
      <div class="enjoy__content">
        <video
          autoplay
          poster="${ot}"
          muted
          loop>
          <source
            src="${nt}"
            type="video/mp4" />
        </video>
  
        <div class="enjoy__content_offer-wrapper">
          <div class="enjoy__content_offer">
            <h1 class="heading-1 mb-10"><em class="text-accent">Enjoy</em> premium coffee at our charming cafe</h1>
            <p class="mb-10">
              With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination
              for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.
            </p>
            <a class="button-primary enjoy-btn" href="${i}menu/"> <span>Menu</span> ${d} </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  `)}function at(){document.querySelector("#enjoy").insertAdjacentHTML("afterend",`
  <section id="favorite-coffee" class="section">
    <h2 class="heading-2 mb-10">Choose your <em class="text-accent">favorite</em> coffee</h2>
    <div class="slider">
      <div class="slider__content mx-auto">
        <div class="slider__content_img"></div>
        <div class="slider__content_text mt-5">
          <h3 class="heading-3">S’mores Frappuccino</h3>
          <p>
            This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.
          </p>
          <h3 class="heading-3">$5.50</h3>
        </div>
      </div>
      <div class="slider__buttons">
        <button class="slider__buttons_btn-left rounded-btn transparent-dark-btn">${q}</button>
        <button class="slider__buttons_btn-right rounded-btn transparent-dark-btn">${V}</button>
      </div>
      <div class="slider__controls">
        <button class="slider__controls_item active"></button>
        <button class="slider__controls_item"></button>
        <button class="slider__controls_item"></button>
      </div>
    </div>
  </section>
  `)}const ct="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/about-1-747ef372.webp",it="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/about-2-47d2fb97.webp",rt="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/about-3-cb83471b.webp",lt="https://rolling-scopes-school.github.io/naya252-JSFE2023Q4/coffee-house2/assets/about-4-d60ea7ed.webp";function dt(){document.querySelector("#favorite-coffee").insertAdjacentHTML("afterend",`
  <section id="about" class="section">
    <h2 class="heading-2 mb-10">
      Resource is <em class="text-accent">the perfect and cozy place</em> where you can enjoy a variety of hot beverages,
      relax, catch up with friends, or get some work done.
    </h2>
    <div class="about__images">
      <div class="about__images_column">
        <div class="card large">
          <img
            loading="lazy"
            src="${ct}"
            alt="about-1" />
        </div>
        <div class="card">
          <img
            loading="lazy"
            src="${it}"
            alt="about-2" />
        </div>
      </div>
      <div class="about__images_column">
        <div class="card">
          <img
            loading="lazy"
            src="${rt}"
            alt="about-3" />
        </div>
        <div class="card large">
          <img
            loading="lazy"
            src="${lt}"
            alt="about-4" />
        </div>
      </div>
    </div>
  </section>
  `)}function mt(){document.querySelector("#about").insertAdjacentHTML("afterend",`
<section id="mobile-app" class="section">
  <div class="mobile-app__offer">
    <h2 class="heading-2"><em class="text-accent">Download</em> our apps to start ordering</h2>
    <p>
      Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are
    </p>
    <div class="mobile-app__offer_buttons">
      <button class="button-primary mobile-app-btn transparent-dark-btn svg-fill">
      ${Y}
      <span class="button__text">
        <span class="caption">Available on the</span>
        <span>App Store</span>
      </span>
    </button>
    <button class="button-primary mobile-app-btn transparent-dark-btn svg-fill">
    ${D}
      <span class="button__text">
        <span class="caption">Available on</span>
        <span>Google Play</span>
      </span>
    </button>
    </div>
  </div>
  <div class="mobile-app__img">
  </div>
</section>
`)}function p(){document.querySelector("#main").insertAdjacentHTML("afterend",`
<footer id="footer" class="wrap mx-auto mt-auto mb-10">
  <div class="footer__offer">
    <h2 class="heading-2">
      <span class="text-light">Sip, Savor, Smile.</span>
      <span class="text-accent accent">It’s coffee time!</span>
    </h2>
    <div id="socials"></div>
  </div>
  <div class="footer__contacts">
    <h3 class="heading-3">Contact us</h3>
    <a
      class="link mb-1"
      target="_blank"
      href="https://www.google.com/maps/place/%D0%9F%D0%B0%D1%80%D0%BA+%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9+%22Magic+City%22/@41.3015407,69.2643463,14z/data=!4m15!1m8!3m7!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YI!3b1!8m2!3d41.2994958!4d69.2400734!16zL20vMGZzbXk!3m5!1s0x38ae8bf3870c714d:0x6ddece20c220333b!8m2!3d41.3042866!4d69.2465277!16s%2Fg%2F11pbj1v2b_?entry=ttu"
      ><span>${W} 8558 Green Rd., LA</span></a
    >
    <a
      class="link mb-1"
      href="tel:+16035550123"
      ><span>${J} +1 (603) 555-0123</span></a
    >
    <span class="link mb-1">${H} Mon-Sat: 9:00 AM – 23:00 PM</span>
  </div>
</footer>
`);const e=[T,N,K];let t="";e.forEach(o=>{t+=`<button class="social__btn rounded-btn transparent-light-btn">${o}</button>`}),document.querySelector("#socials").insertAdjacentHTML("afterbegin",t)}function ut(){u(),st(),at(),dt(),mt(),p()}const pt=[{name:"Coffee",img:X},{name:"Tea",img:$},{name:"Dessert",img:tt}],bt=[{name:"Irish coffee",descriptions:"Fragrant black coffee with Jameson Irish whiskey and whipped milk",price:"$7.00",img:B},{name:"Kahlua coffee",descriptions:"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",price:"$7.00",img:Q},{name:"Honey raf",descriptions:"Espresso with frothed milk, cream and aromatic honey",price:"$5.50",img:O},{name:"Ice cappuccino",descriptions:"Cappuccino with soft thick foam in summer version with ice",price:"$5.00",img:F},{name:"Espresso",descriptions:"Classic black coffee",price:"$4.50",img:P},{name:"Latte",descriptions:"Espresso coffee with the addition of steamed milk and dense milk foam",price:"$5.50",img:z},{name:"Latte macchiato",descriptions:"Espresso with frothed milk and chocolate",price:"$5.50",img:L},{name:"Coffee with cognac",descriptions:"Fragrant black coffee with cognac and whipped cream",price:"$6.50",img:R}];function ft(){document.querySelector("#header").insertAdjacentHTML("afterend",`
<main id="main" class="wrap mx-auto mt-5">
  <section id="menu">
    <h1 style="display: none">Menu</h1>  
    <h2 class="heading-2 mb-10 mx-auto">Behind each of our cups hides an <em class="text-accent">amazing surprise</em></h2>
    <div class="menu__tabs mb-10"></div>
    <div class="menu__items"></div>
    <button id="more-cards" class="rounded-btn transparent-dark-btn">${Z}</button>
  </section>
</main>
`);let e="";pt.forEach(o=>{e+=`<button id="${o.name.toLowerCase()}">
  <span class="button_img-container">${o.img}</span>
  <span class="button_text">${o.name}</span>
  </button>`}),document.querySelector(".menu__tabs").insertAdjacentHTML("afterbegin",e),document.querySelector("#coffee").classList.add("active");let t="";bt.forEach(o=>{t+=`
  <div class="card">
    <div class="card__img">
      <img
        loading="lazy"
        src="${o.img}"
        alt="${o.name}" />
    </div>
    <div class="card__info">
      <h3 class="heading-3 mb-3">${o.name}</h3>
      <p class="text-three-rows">${o.descriptions}</p>
      <h3 class="heading-3 mt-auto">${o.price}</h3>
    </div>
  </div>
  `}),document.querySelector(".menu__items").insertAdjacentHTML("afterbegin",t)}function gt(){u(),ft(),p()}function b(){document.querySelectorAll(".nav-item").forEach(e=>{e.classList.remove("active")})}function f(){r.includes("menu")&&(document.querySelector("#nav-menu").classList.add("active"),document.querySelector("#nav-menu").style.pointerEvents="none")}function ht(e){e.forEach(t=>{const o=t.target;t.isIntersecting?document.querySelectorAll(".nav-item").forEach(s=>{s.classList.toggle("active",s.getAttribute("id").replace("nav-","")===o.id)}):!t.isIntersecting&&r===`${i}`&&b()})}const g=new IntersectionObserver(ht,{threshold:[.5,1]});function h(){let e;return r.includes("menu")?(f(),e=["menu","footer"]):e=m.map(t=>t.link),e}function vt(){h().forEach(t=>{g.observe(document.getElementById(t))})}function At(){h().forEach(t=>{g.unobserve(document.getElementById(t))}),b(),f()}r.includes("menu")?gt():ut();const wt=new ResizeObserver(e=>{const[{inlineSize:t}]=e[0].borderBoxSize;t>1024?vt():At()}),Ct=document.querySelector("body");wt.observe(Ct);
//# sourceMappingURL=main-64901189.js.map
