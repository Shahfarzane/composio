"""
Setup configuration for Composio Griptape plugin.
"""

from pathlib import Path

from setuptools import setup


setup(
    name="composio_griptape",
    version="0.5.52-rc.2",
    author="Sawradip",
    author_email="sawradip@composio.dev",
    description="Use Composio to get an array of tools with your Griptape wokflow.",
    long_description=(Path(__file__).parent / "README.md").read_text(encoding="utf-8"),
    long_description_content_type="text/markdown",
    url="https://github.com/ComposioHQ/composio",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.9,<4",
    install_requires=["composio_core>=0.5.50,<=0.5.52-rc.2", "griptape>=0.24.2"],
    include_package_data=True,
)
