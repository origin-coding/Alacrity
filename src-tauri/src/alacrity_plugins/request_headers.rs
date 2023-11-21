use curl::easy::{Easy, List};

#[tauri::command]
pub fn get_headers(url: String, method: String) -> Result<String, String> {
    let mut easy = Easy::new();
    // Show response headers.
    easy.show_header(true).unwrap();
    easy.nobody(true).unwrap();

    // Ignore 100 response codes.
    let mut list = List::new();
    list.append("Expect: ").unwrap();
    easy.http_headers(list).unwrap();

    // Set url and methods.
    // Parameter "method" is restricted at frontend, so we don't have to double-check it.
    easy.url(url.as_str()).unwrap();
    easy.custom_request(method.as_str()).unwrap();

    let mut buffer = Vec::new();
    {
        let mut transfer = easy.transfer();
        transfer
            .write_function(|data| {
                buffer.extend_from_slice(data);
                Ok(data.len())
            })
            .unwrap();
        match transfer.perform() {
            Ok(_) => {}
            Err(_) => return Err(String::from("Error when requesting.")),
        };
    }

    // Process response, get headers and drop response body.
    let mut response = String::from_utf8(buffer).unwrap();
    let mut headers = String::new();
    response = response.replace("\r\n", "\n");
    for line in response.lines() {
        headers += format!("{}\n", line).as_str();
        if line.to_string().is_empty() {
            // Encountering an empty line means response header ends.
            break;
        }
    }

    headers = headers.trim().to_string();
    Ok(headers)
}
