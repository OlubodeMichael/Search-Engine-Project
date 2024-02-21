# Search-Engine-Project
Small Scale Search Engine with following steps

Scope:
general search

Web Crawling:
    Web crawler to fetch web pages. using Scrapy and BeautifulSoup

indexing.py:
    Responsibility: This file contains functions related to the indexing process. It is responsible for writing and reading data to/from a JSON file, running the web crawler to fetch data from a website, and performing TF-IDF indexing on the extracted data.
    Functions:
    write_to_json and read_from_json: Handle writing data to and reading data from a JSON file.
    load_data_from_json: Load data from a JSON file.
    index_doc_with_tfidf_to_json: Index a document by calculating TF-IDF values and storing the result in a JSON file.
    run_crawler: Run the web crawler to fetch data from a specified website.
    calculate_tfidf_and_index_to_json: Calculate TF-IDF values for documents and index them to a JSON file.
    Usage: It is used for the backend processes involved in indexing, such as running the crawler, calculating TF-IDF values, and storing the indexed data.
routes.py:
    Responsibility: This file defines the routes (endpoints) of your Flask web application. It handles incoming HTTP requests and defines the behavior of the web application.
    Endpoints:
    /search: Handles GET requests for searching. Retrieves a search query from the request parameters, searches for matching documents in the loaded JSON data, and returns the results.
    /index: Handles POST requests for indexing. Expects a JSON payload containing a website URL, crawls the specified website using the web crawler, and indexes the extracted data using TF-IDF.
    Usage: It's used to run a web server that exposes these search and indexing functionalities to users or other systems.