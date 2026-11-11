import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
  enableXpath:
    (leapwork.team.settings.get("enableXpath")
      ?? leapwork.workspace.settings.get("enableXpath")) !== "false",
  chromiumArgs:
    leapwork.team.settings.get("chromiumArgs")
      ?? leapwork.workspace.settings.get("chromiumArgs")
      ?? ["--deny-permission-prompts",
          "--disable-notifications"
        ],
  chromiumPrefs: leapwork.team.settings.get("chromiumPrefs")
      ?? leapwork.workspace.settings.get("chromiumPrefs")
      ?? { "credentials_enable_service": false,
          "profile":
          {
            "password_manager_enabled": false,
            "password_manager_leak_detection": false
          }
        },
});

// ai-studio-step-id: pw182b9ai0
await leapwork.step("Click the File Download link", async () => {
    // Click link "File Download"
    await page.getByRole('link', { name: 'File Download', exact: true }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/ul/li[18]/a" });

// ai-studio-step-id: pw1c8i8wb0
await leapwork.step("Click the e2e-1793772095844-c.png download link", async () => {
    // Click link "e2e-1793772095844-c.png"
    await page.getByRole('link', { name: 'e2e-1793772095844-c.png' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/div/a[44]" });

// ai-studio-step-id: pw1aiopz60
await leapwork.step("Click the e2e-1793772115734-b.pdf download link", async () => {
    // Click link "e2e-1793772115734-b.pdf"
    await page.getByRole('link', { name: 'e2e-1793772115734-b.pdf' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/div/a[47]" });

// ai-studio-step-id: pwz6wvk500
await leapwork.step("Click the e2e-1793772153701-d.csv download link", async () => {
    // Click link "e2e-1793772153701-d.csv"
    await page.getByRole('link', { name: 'e2e-1793772153701-d.csv' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/div/a[61]" });

// ai-studio-step-id: pw15hwfc20
await leapwork.step("Click the file.json link to download the JSON file", async () => {
    // Click link "file.json"
    await page.getByRole('link', { name: 'file.json' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/div/a[74]" });

// ai-studio-step-id: pwlfg43300
await leapwork.step("Click the salesforce_temp.docx file link to download it", async () => {
    // Click link "salesforce_temp.docx"
    await page.getByRole('link', { name: 'salesforce_temp.docx' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/div/a[99]" });

// ai-studio-step-id: pw1wyf39i0
await leapwork.step("Switch to tab \"the-internet.herokuapp.com\"", async () => {
    await leapwork.switchTab({
      tabKey: "tab_ES4P57bH",
      title: "the-internet.herokuapp.com",
      url: "https://the-internet.herokuapp.com/",
      fromTabKey: "tab_TnWSr4cj",
      toTabKey: "tab_ES4P57bH",
      switchSequence: 1,
      openedByTabKey: "tab_TnWSr4cj",
    });
}, { action: "switch_tab" });

// ai-studio-step-id: pw8u5ezn00
await leapwork.step("Click the File Upload link", async () => {
    // Click link "File Upload"
    await page.getByRole('link', { name: 'File Upload' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/ul/li[19]/a" });

// ai-studio-step-id: pw1brn1o00
await leapwork.step("Upload a file to \"Upload \"e2e-1793772153701-d.csv\"\"", async () => {
    await page.locator("#file-upload").setInputFiles(leapwork.files.downloadedPath("e2e-1793772153701-d.csv"));
}, { action: "click", relativeXpath: "//html[1]/body[1]/div[2]/div[1]/div[1]/form[1]/input[1]" });

// ai-studio-step-id: pwuara1b00
await leapwork.step("Click the Choose File button in the File Uploader.", async () => {
    // Click div
    await page.getByText('File Uploader Choose a file').click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/div[1]" });

// ai-studio-step-id: pw1awovx30
await leapwork.step("Upload a file to \"Upload \"jsTest.js\"\"", async () => {
    const uploadJsTestJsInput = page.locator("#file-upload");
    await expect(uploadJsTestJsInput).toHaveCount(1);
    //await uploadJsTestJsInput.setInputFiles(leapwork.files.path('FL-11'));
    await uploadJsTestJsInput.setInputFiles(leapwork.files. downloadedPath("e2e-1793772153701-d.csv"));
}, { action: "click", relativeXpath: "//html[1]/body[1]/div[2]/div[1]/div[1]/form[1]/input[1]" });

// ai-studio-step-id: pw1w7fk9u0
await leapwork.step("Click the Upload button on the file uploader", async () => {
    // Click button "Upload"
    await page.getByRole('button', { name: 'Upload' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"file-submit\"]" });

// ai-studio-step-id: pw16wjwvb0
await leapwork.step("Validate the upload page shows \".js files can't be uploaded.\"", async () => {
    // Assert paragraph contains ".js files can't be uploaded."
    await expect(page.getByText('.js files can\'t be uploaded.')).toContainText(".js files can't be uploaded.");
}, { action: "validate", relativeXpath: "//*[@id=\"upload-error\"]", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from .js files can't be uploaded.", async () => {
//     // Get value from paragraph
//     const lw_value = (await page.getByText('.js files can\'t be uploaded.').textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_jsFilesCanTBeUploaded", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: "//*[@id=\"upload-error\"]" });

// ai-studio-step-id: pw1cxwr1i0
await leapwork.step("Click the salesforce_temp.docx download link", async () => {
    // Click link "salesforce_temp.docx"
    await page.getByRole('link', { name: 'salesforce_temp.docx' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/div/a[100]" });

// ai-studio-step-id: pwksbdyx00
await leapwork.step("Click the salesforce_temp.docx file link to download it", async () => {
    // Click link "salesforce_temp.docx"
    await page.getByRole('link', { name: 'salesforce_temp.docx' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/div/a[100]" });
