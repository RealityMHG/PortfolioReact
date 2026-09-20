# IGFEJ case study: evidence and editorial boundaries

The case study is based on the supplied English CV and a read-only review of `IGFEJ/IGFEJ.Web.Portal`. The reference application was not run, connected to a service, or modified. No source code, screenshots, real records, credentials, internal URLs or deployment configuration were copied into the portfolio.

## Attribution

The CV establishes Rafael's Front-End Developer role at Axians from May 2025, work on reusable/configurable interfaces, REST API and authentication integration, code reviews, troubleshooting and support for developers. Source inspection establishes patterns present in the application; it does not prove sole authorship. The public case study therefore identifies a contribution within the Axians project team and describes the wider application's approach separately.

No user counts, commercial results, release status, time savings or performance improvements are claimed. Benefits are explanations of the implementation approach, not measured project outcomes.

## Evidence map

Paths below are relative to the read-only IGFEJ.Web.Portal reference, not dependencies or files to publish.

| Public explanation                                           | Supporting implementation                                                                                                                                                                       |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared tables with configurable columns                      | `src/types/components/table/index.ts`, `src/components/components/table/BaseTable.tsx`, `src/components/components/table/TablePage.tsx`, `src/constants/components/table/tableColumnConfig.tsx` |
| Asset columns adapt to type and context                      | `src/constants/main/manage-assets/assets/table-column-config/assetConfig.tsx`, `src/utils/assetUtils.ts`                                                                                        |
| Reused browsing behaviour                                    | `src/hooks/useTable.ts`; used in `src/components/main/manage-assets/assets/AssetsView.tsx` and `src/components/main/manage-assets/processes/ProcessesView.tsx`                                  |
| Contract columns use the same configuration builder          | `src/constants/main/contracts-providers/table-column-config/contractProviderConfig.tsx`                                                                                                         |
| Conditional fields, requiredness and form sections           | `src/hooks/useFormUtils.ts`, `src/hooks/assets/useRegisterAssetForm.ts`, `src/components/main/manage-assets/assets/RegisterAssetFormSections.tsx`                                               |
| Documents, photos and assessments within asset forms         | `src/components/main/manage-assets/assets/RegisterAssetFormSections.tsx`                                                                                                                        |
| UI actions depend on profiles, operations and record context | `src/auth/operationPermissions.ts`, `src/hooks/tasks/useTaskActionAvailability.ts`, `src/utils/assetActionUtils.ts`                                                                             |
| API coordination, loading and refresh behaviour              | `src/hooks/useApiQuery.ts`, `src/hooks/useApiMutationRunner.ts`                                                                                                                                 |

Client-side permission checks are described as presentation logic, not a security guarantee. Backend enforcement was not reviewed. Tests exist for selected asset action rules, but no claim of comprehensive testing or coverage is made.

## Architecture visual

`CaseArchitecture.tsx` presents the configuration → shared components → adapted workflows relationship as a static, semantic diagram. The subtype example, available in the expandable engineering details, is grounded in `selectIdentifiers` in `src/utils/assetUtils.ts` and `isPropRequired` in `src/hooks/useFormUtils.ts`: subtype identifiers take precedence when configured and are treated as required fields. Form sections follow the asset-type configuration. Action availability is described separately as permission- and state-dependent, rather than implying that asset type alone determines it.

The visual includes no fictional records, copied source or simulated product controls. It explains engineering decisions and the reuse they enable, without attributing sole authorship or claiming measured outcomes.

## Review from a prospective client's perspective

The previous portfolio established employment history but made visitors infer what Rafael could help them build. Changes made:

- State React/TypeScript business applications, complex forms, data-heavy interfaces and API integration near the top.
- Put a relevant professional case study before the employment timeline.
- Explain each technical choice in terms of consistency, adaptation and maintainability.
- Keep employment and personal contribution clear; avoid suggesting that IGFEJ commissioned Rafael independently.
- Condense the timeline to avoid repeating the case study.
- Provide direct contact from the hero and case study; ask for project context and timeline.
- Keep the CV accessible for recruiters and retain accurate education and language information.

Recommended next evidence, when available: a specific approved account of an individual contribution and its observed result; a testimonial used with the author's permission; and an explicit statement of engagement preferences and availability supplied by Rafael. None of these are invented in the current copy.

## Content refinement

The default view now keeps the project challenge, team attribution and a compact three-step architecture flow visible. A native details disclosure holds the tables, subtype validation and contextual action explanations. Repeated implementation/value paragraphs were removed, and Experience and About were shortened without adding new professional claims.
