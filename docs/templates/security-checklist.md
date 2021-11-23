---
id: security-checklist
title: Security and Privacy Checklist
---
Security and Privacy checklist is mainly broken into following categories based on the stages of Software Development Life Cycle

### Requirement

- Security requirements are captured and documented.

- Non-functional requirements for Security aspects are identified and maintained in the form of a backlog.

- Information security and Privacy shall be planned from the requirements gathering phase itself.

- A personal data flow map shall be created and maintained.

- The team understands the obligations arising from various contractual agreements between the customer and the company. (e.g., Main Business Contract, GDPR contracts )

- The team shall learn the GDPR module in Maturify ( Internal Knowledge Management system)

- The team shall learn to understand who is playing the role of Data Controller, Data Processor, and Data SubProcessor according to the GDPR.

- Privacy requirements are identified during the Requirement gathering phase. The team has focused on Privacy by design and Privacy by default concepts.


### Design and Architecture

- Key quality attributes (for Security)  are defined. Tactics are identified for each significant architectural requirement. Tradeoffs are analyzed between tactics during architectural decisions.

- Privacy architecture is explicitly defined and maintained.

- Required information security principles are identified and planned for implementation.

- Impact analysis is carried out for changes to the product, including information security and Privacy.

- The security architecture of the product is explicitly defined and validated against possible threats.

### Development

- All third-party libraries are correctly selected and approved by the customer. Vulnerabilities are analyzed, licensing is reviewed.

- Privacy regulations (PID, GDPR) requirements are identified, and code is made compliant with them.

- Information (including PII) on transit shall be protected from fraudulent activity, unauthorized disclosure, and modification.

- Temporary files created as a result of the processing of PII shall be disposed.

- The team is aware of eight privacy design strategies and established the implementation plan.

### Testing

- Risks related to Quality, Information Security, and Privacy shall be recorded, and the actions shall be tracked. Risks shall be communicated to the stakeholders.

- Test execution covers test cases written for Privacy rights of data subjects, Information security, and Security of personal data.​

- The privacy test framework is identified and included in the general Quality assurance strategy of the project.

- Testing is planned and scoped to cover the personal data journey map identified for the project.

### Operation

- Production systems have the strictest privacy settings applied by default (Privacy by default)

- Customer approval is obtained before getting any third party involved (local or foreign suppliers, vendors, service providers, international organizations, etc.) in processing personal data.

- Secure deployment practices are implemented to ensure the protection of personal data and Privacy.

- Product deployment practices considering both Securities of personal data and Privacy shall be implemented.

- Customer Assets that are under the custody of the team shall be tracked. This shall include both tangible and intangible assets, including PII.

- Access is granted to the team members to different systems, and the access rights shall be recorded. Team members shall be given access to unique user IDs.

- When a member leaves the project team, 
(1) All project-specific access granted shall be revoked. The customer shall be informed via an email requesting to revoke any access granted by them.
(2) Project-related emails shall be backed up to a central location.
(3) All PII shall be deleted or handed over to the customer. 

- If the departing team member has known passwords for user IDs remaining active, these shall be changed.

- Team member access provisioning and their access rights shall be reviewed at a predefined frequency.

- Periodic security assessments are scheduled and practiced in the production/staging environment. Actions are taken on the vulnerabilities found.

- Restricted access to production data is allowed to avoid access to sensitive customer data.

- The right to object - When personal data are processed for direct marketing, scientific or research purposes, or any other situational purposes, the data subject shall have the right to object at any time

- The right to be informed - When data is obtained directly, the data subject must be immediately notified. Also, the data subject should be informed about the duration of storage, the data subject's rights, the ability to withdraw consent, the right to complain about the authorities, and whether the provision of personal data is a statutory or contractual requirement. In addition, the data subject must be informed of any automated decision-making activities, including profiling.

- The right to access personal data - The right of access includes information about the processing purposes, the categories of personal data processed, the recipients or categories of recipients, the planned duration of storage or criteria for their definition, information about the rights of the data subject such as rectification, erasure or restriction of processing, the right to object, instructions on the right to complain about the authorities, information about the origin of the data, as long as these were not collected from the data subject himself, and any existence of an automated decision-making process, including profiling, with meaningful information about the logic involved as well as the implications and intended effects of such procedures.

- The right to correct information - The data subject shall have the right to obtain from the controller without undue delay the correction of inaccurate personal data concerning them

- The right to be removed - The data subject should have the right to ask the controller to delete data when personal data are no longer necessary, when the data subject withdraws the consent, when personal data has been unlawfully processed, etc.

- The right to data portability gives data subjects the right to receive personal data provided to a controller in a structured, commonly used, and machine-readable format. It also gives them the right to request that a controller transmits this data directly to another controller.

- The right to restrict processing - The data subject has the right to limit how their personal data has been used or processed. This is an alternative way of requesting the erasure of personal data.

- The right to not be subject to automated decision making - The data subject shall have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning them or similarly significantly affects them.
