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

// ai-studio-step-id: pwhzlote00
await leapwork.step("Click the File Upload link", async () => {
    // Click link "File Upload"
    await page.getByRole('link', { name: 'File Upload' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/ul/li[19]/a" });

// ai-studio-step-id: pwbjpri700
await leapwork.step("Upload a file to \"Upload \"Module click.mp4.html\"\"", async () => {
    const uploadModuleClickMp4HtmlInput = page.locator("#file-upload");
    await expect(uploadModuleClickMp4HtmlInput).toHaveCount(1);
    await uploadModuleClickMp4HtmlInput.setInputFiles(leapwork.files.path('FL-1'));
}, { action: "click", relativeXpath: "//html[1]/body[1]/div[2]/div[1]/div[1]/form[1]/input[1]" });

// ai-studio-step-id: pw19hm0tm0
await leapwork.step("Upload a file to \"Upload \"sample-html-files-sample2.html\"\"", async () => {
    const uploadSampleHtmlFilesSample2HtmlInput = page.locator("#file-upload");
    await expect(uploadSampleHtmlFilesSample2HtmlInput).toHaveCount(1);
    await uploadSampleHtmlFilesSample2HtmlInput.setInputFiles(leapwork.files.path('FL-7'));
}, { action: "click", relativeXpath: "//html[1]/body[1]/div[2]/div[1]/div[1]/form[1]/input[1]" });

// ai-studio-step-id: pw189biql0
await leapwork.step("Upload a file to \"Upload \"Module click.mp4.html\"\"", async () => {
    const uploadModuleClickMp4HtmlInput = page.locator("#file-upload");
    await expect(uploadModuleClickMp4HtmlInput).toHaveCount(1);
    await uploadModuleClickMp4HtmlInput.setInputFiles(leapwork.files.path('FL-8'));
}, { action: "click", relativeXpath: "//html[1]/body[1]/div[2]/div[1]/div[1]/form[1]/input[1]" });

// ai-studio-step-id: pw19issiw0
await leapwork.step("Click the Upload button to submit the selected file.", async () => {
    // Click button "Upload"
    await page.getByRole('button', { name: 'Upload' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"file-submit\"]" });

// ai-studio-step-id: pwezjc9b00
await leapwork.step("Validate the uploaded file shows \"Module_click.mp4.html\" on The Internet upload page", async () => {
    // Assert div contains "Module_click.mp4.html"
    await expect(page.getByText('Module_click.mp4.html')).toContainText("Module_click.mp4.html");
}, { action: "validate", relativeXpath: "//*[@id=\"uploaded-files\"]", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from Module_click.mp4.html", async () => {
//     // Get value from div
//     const lw_value = (await page.getByText('Module_click.mp4.html').textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_module_clickMp4Html", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: "//*[@id=\"uploaded-files\"]" });

// ai-studio-step-id: pw1geonfk0
await leapwork.step("Click the File Upload link", async () => {
    // Click link "File Upload"
    await page.getByRole('link', { name: 'File Upload' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/ul/li[19]/a" });

// ai-studio-step-id: pw3ahcnf00
await leapwork.step("Upload a file to \"Upload \"GetD365Bug.mp4\"\"", async () => {
    const uploadGetD365BugMp4Input = page.locator("#file-upload");
    await expect(uploadGetD365BugMp4Input).toHaveCount(1);
    await uploadGetD365BugMp4Input.setInputFiles(leapwork.files.path('FL-16'));
}, { action: "click", relativeXpath: "//html[1]/body[1]/div[2]/div[1]/div[1]/form[1]/input[1]" });

// ai-studio-step-id: pw54qgsm00
await leapwork.step("Upload a file to \"Upload \"GetD365Bug.mp4\"\"", async () => {
    const uploadGetD365BugMp4Input = page.locator("#file-upload");
    await expect(uploadGetD365BugMp4Input).toHaveCount(1);
    await uploadGetD365BugMp4Input.setInputFiles(leapwork.files.path('FL-17'));
}, { action: "click", relativeXpath: "//html[1]/body[1]/div[2]/div[1]/div[1]/form[1]/input[1]" });

// ai-studio-step-id: pw10guwrx0
await leapwork.step("Click the File Uploader area to choose a file", async () => {
    // Click div
    await page.getByText('File Uploader Choose a file').click();
}, { action: "click", relativeXpath: "//*[@id=\"content\"]/div[1]" });

// ai-studio-step-id: pwfuszhp00
await leapwork.step("Upload a file to \"Upload \"GetD365Bug.mp4\"\"", async () => {
    const uploadGetD365BugMp4Input = page.locator("#file-upload");
    await expect(uploadGetD365BugMp4Input).toHaveCount(1);
    await uploadGetD365BugMp4Input.setInputFiles(leapwork.files.path('FL-18'));
}, { action: "click", relativeXpath: "//html[1]/body[1]/div[2]/div[1]/div[1]/form[1]/input[1]" });
