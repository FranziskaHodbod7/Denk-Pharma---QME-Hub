# Refactoring of FormatD.DesignSystem into a Vendor Specific DesignSystem implementation

Look into `Documentation/99-DesignSystem.md` to get a grasp of the general structure how the new DesignSystem should look like.
Look into `Documentation/01-Packages.md` how the current project and its packages SHOULD look like.

The overall goal is to have the FormatD.DesignSystem design system split into multiple packages as a preparation for an upcoming Major Refactoring. This project is meant to be an evaluation of that.

## Steps

> Do every step one after another with its own Plan in `Plan Mode`.
> The Status flow: TBD > Doing > Done

| Part | Status | Description                                                                                                                                                                                              | Notes                                                                                                               |
| ---- | ------ |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| 1. | Done | Read the existing DesignSystem package to get an idea of all the parts `source/Packages/Application/FormatD.DesignSystem`                                                                                | Create a new file in which all your findings are saved for later evaluation and continuation of this effort         |
| 2. | Done | Create a detailed **component-level mapping**: map each existing node type / Fusion component to its target package, based on the high-level structure already defined in `Documentation/01-Packages.md` | Let the user review/edit the mapping before proceeding                                                              |
| 3. | Done | Create the `source/DistributionPackages/` folder structure with empty package scaffolding (`composer.json`, folder layout)                                                                               | Follow the conventions from `Documentation/01-Packages.md`: `FDDS/`, `Design/`, `Component/`, `Packages/`, `Sites/` |
| 4. | Done | Copy all things, refactor/rename them and update the composer files                                                                                                                                      | Use the mapping file from Step 2                                                                                    |
| 5. | TBD | Fix frontend-compiling paths and other things                                                                                                                                                            | Update vite/build configs, paths for Distribution Packages                                                          |

### Notes

All "Structure Elements" (Columns, Section, ...) SHOULD be in the same package like `FormatD.DesignSystem:Components.Structure`.
"Text Elements" (like Headline, Text, Quote, ...) SHOULD be in the same package like `FormatD.DesignSystem:Components.Text`.

Tab and Accordion SHOULD go into the same package.

Form stuff might go in `FormatD.DesignSystem:Components.Form`.

The slider in its own `FormatD.DesignSystem:Components.Slider`.